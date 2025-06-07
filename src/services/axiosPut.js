import axios from "axios";

export async function axiosPut(url, id, data) {
  try {
    const response = await axios.put(`${url}/${id}`, data);
    return response.data;
  } catch (error) {
    return error
  }
}