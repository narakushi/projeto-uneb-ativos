import axios from "axios";

export async function axiosPost(data, url) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return error;
  }
}