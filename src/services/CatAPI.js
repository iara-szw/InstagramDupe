import axios from "axios";

export async function ObtenerImagenes(num = 10) {
  try {
    const API_URL = `https://api.thecatapi.com/v1/images/search?limit=${num}`;

    const response = await axios.get(API_URL);

    return response.data;
  } catch (error) {
    console.log("Error al obtener imágenes", error);

    return [];
  }
}