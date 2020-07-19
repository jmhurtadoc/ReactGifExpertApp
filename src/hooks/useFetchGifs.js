import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);
  //el segundo argumento es un arreglo, si esta vacio solo ejecuta el codigo una vez cuando el codigo es renderizado.

  return state;
};
