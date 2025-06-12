import axios from "axios";
import { useEffect, useState } from "react";

export function useDeleteOneAxios(url, id) {

  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function deleteItem() {
      try {
        const res = await axios.delete(
          `${url}/${id}`
        );

        setResponse(response.data);
        console.log(res);
        alert("Item deletado com sucesso!");
      } catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }

    deleteItem();
  }, [id]);

  return { res, loading };
}