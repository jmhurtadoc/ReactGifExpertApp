import React from "react";
import { useFetchGifts } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifts(category);
  return (
    <>
      <h3> {category} </h3>

        {loading && <p>Cargando</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

/* {images.map((img) => {
return <li key={img.id}> {img.title} </li>
})} */
export default GifGrid;
