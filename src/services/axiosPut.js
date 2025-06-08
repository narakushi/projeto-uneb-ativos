import axios from "axios";

export async function axiosPut(data, url, id) {
  try {
    const response = await axios.put(`${url}/${id}`, data);
    return response.data;
  } catch (error) {
    return error
  }
}