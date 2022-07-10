import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/url";

// ====================== Hook para pegar os pokemons e colocar no estado
const useRequestData = (pokemon) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(BASE_URL + pokemon)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("Ocorreu um erro");
      });
  }, [url]);
  return data;
};

export default useRequestData;
