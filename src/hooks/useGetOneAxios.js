import axios from "axios";
import { useEffect, useState } from "react";

export function useGetOneAxios(url, idForm) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get(
          `${url}/${idForm}`
        );

        setItems(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }

    getItems();
  }, [idForm]);

  return { items, loading };
}