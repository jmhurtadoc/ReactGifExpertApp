import React, { useState } from "react";
import CategoryAdd from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  // const handleAdd = () => {
  //   //   setCategories ( [...categories, 'Monster Rancher']);
  //   setCategories((cats) => [...cats, "Monster Rancher"]);
  // };

  return (
    <>
      <h2> GifExpertApp </h2>
      <hr></hr>
      <CategoryAdd setCategories={setCategories}></CategoryAdd>
      <hr></hr>

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
