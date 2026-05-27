# Instagram Dupe De gatos 🐱
 
Una app estilo Instagram hecha en React que carga imágenes de gatos desde The Cat API.
 
🔗 Diseño de Figma utilizado como referencia:[Figma](https://www.figma.com/es-es/comunidad/file/1235135369163092252/instagram-web-ui-recreated)
 
---
 
## Cómo está organizado el proyecto
 
```
src/
├── assets/          # Íconos del sidebar y logo +info menu y usuario
├── componentes/     # Todos los componentes de la UI
├── services/        # CatAPI.js con la función que trae las imágenes
├── App.jsx
└── App.css
```
 
La idea fue separar la lógica de la UI lo más posible. El fetch a la API vive en `services/` y cada componente se encarga solo de mostrarse bien.
 
---
 
## Componentes
 
### `App.jsx`
Es el componente raíz. Hace el fetch a la API con `useEffect`, guarda los posts en un `useState`, y decide qué vista mostrar (feed o perfil) según otro estado llamado `view`. Pasa los posts como prop a todos los componentes que los necesitan.
 
### `Tabla.jsx`
El sidebar izquierdo. Recibe el array `menu` con los ítems de navegación y los renderiza. También recibe `onNavigate` desde App para cambiar la vista cuando el usuario hace clic en "Profile" o "Home".
 
### `BarraHorizontal.jsx`
Cada ítem del sidebar: ícono + nombre. Es un componente presentacional puro, no sabe nada de navegación ni de estado. Se reutiliza para todos los ítems del menú.
 
Lo separamos de `Tabla` porque si en algún momento queremos cambiar cómo se ve un ítem (agregar un badge de notificaciones, por ejemplo), lo cambiamos en un solo lugar.
 
### `Stories.jsx`
La fila de historias arriba del feed. Recibe los `posts` y toma los primeros 8 para mostrar como historias, usando la imagen del gato como avatar y el username como nombre.
 
### `Feed.jsx`
La lista de publicaciones. Recibe los `posts`, los mapea y renderiza un `Post` por cada uno. También es el único que maneja el estado `selectedPost` para controlar el modal — tiene sentido que viva acá porque el modal aparece dentro del contexto del feed.
 
### `Post.jsx`
Una publicación individual. Recibe `img`, `user`, `likes`, el objeto `post` completo y `onOpenModal`. Cuando el usuario hace clic en la imagen, llama a `onOpenModal` con el post, lo que abre el modal en `Feed`.
 
### `PostModal.jsx`
El modal que se abre al clickear una foto. Muestra la imagen ampliada a la izquierda y toda la info a la derecha: usuario, caption, comentarios simulados, botones de like/guardar y el campo para comentar. Tiene su propio estado interno para manejar si el post está likeado, guardado, y el texto del comentario nuevo.
 
### `RightSidebar.jsx`
El panel derecho con el perfil del usuario logueado y las sugerencias. Recibe los `posts` y usa `posts[0]` como foto del usuario y `posts[1..5]` para las sugerencias. Así no necesita ninguna fuente de datos extra.
 
### `Profile.jsx`
La vista de perfil completa. Muestra la foto, bio, stats y un grid 3×N con todas las publicaciones. Cada foto del grid también abre el `PostModal`. Importa los datos fijos desde `userData.js`.
 
---
 
## Por qué componentizamos así
 
Básicamente seguimos el criterio de: si algo se repite, es un componente; si algo es demasiado grande, se divide.
 
`BarraHorizontal` existe porque el sidebar tiene varios ítems iguales. `Post` existe porque el feed tiene muchas publicaciones iguales. `PostModal` se separó de `Post` porque es una pieza de UI completamente distinta que aparece encima de todo. `Profile` se separó del resto porque es una vista diferente, no un componente dentro del feed.
 
---
 
## Comunicación entre componentes (props)
 
```
App
├── posts ──────────────────→ Stories
├── posts ──────────────────→ Feed
│                               ├── post, onOpenModal ──→ Post
│                               └── post ───────────────→ PostModal
├── posts ──────────────────→ RightSidebar
├── posts ──────────────────→ Profile
│                               └── post ───────────────→ PostModal
├── filas, onNavigate ──────→ Tabla
│                               └── icono, nombre ──────→ BarraHorizontal
```
 
El flujo siempre baja: `App` es el que sabe qué posts hay, y los distribuye. Ningún componente hijo hace fetch por su cuenta.
 
---
 
## Hooks utilizados
 
**`useState`** se usa en tres niveles distintos:
 
- En `App`: `posts` para guardar las imágenes de la API, y `view` para saber si mostrar el feed o el perfil.
- En `Feed` y `Profile`: `selectedPost` para saber qué publicación está abierta en el modal. Cuando es `null`, el modal no se renderiza.
- En `PostModal`: `liked`, `saved` y `comment` para manejar las interacciones dentro del modal sin afectar al resto de la app.
**`useEffect`** se usa solo en `App`, para hacer el fetch a la API cuando el componente se monta. El array de dependencias está vacío `[]` para que se ejecute una sola vez.
 
---
 
## Visualización individual de publicaciones
 
Elegimos la opción del modal porque es lo más cercano a cómo funciona Instagram real. La lógica es simple:
 
1. `Feed` tiene un estado `selectedPost` que arranca en `null`.
2. Cada `Post` recibe `onOpenModal` como prop y lo llama con el objeto del post al hacer clic en la imagen.
3. `Feed` pasa ese post al `PostModal` y lo renderiza.
4. Cuando el usuario cierra el modal (botón ✕ o clic en el fondo), `selectedPost` vuelve a `null` y el modal desaparece.
Lo mismo aplica en `Profile`: las fotos del grid también abren el modal con el mismo componente `PostModal`.
 
---
 
## Perfil de usuario emulado
 
El perfil no tiene login ni registro. Los datos están hardcodeados en `src/assets/InfoUsuario.js`:
 
La foto de perfil es `posts[0].image`, o sea la primera imagen que devuelve la API. Así todo el perfil usa la misma fuente de datos que el resto de la app.
 
La cantidad de publicaciones se calcula dinámicamente con `posts.length` en lugar de estar hardcodeada, porque si la API devuelve más o menos imágenes, el número es siempre correcto.
 
Para navegar al perfil, el usuario hace clic en "Profile" en el sidebar. `Tabla` llama a `onNavigate("profile")` y `App` cambia el estado `view`, lo que hace que se renderice `Profile` en lugar del feed.
 
---
 
## Instrucciones para correr el proyecto
 
```bash
npm install
npm run dev
```
 
