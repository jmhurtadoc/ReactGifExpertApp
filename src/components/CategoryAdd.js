import React, { useState } from "react";
import PropTypes from "prop-types";

const CategoryAdd = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue && inputValue.trim().length > 2) {
      setCategories((cats) => [ inputValue.trim(), ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Agregar Categoria"
        onChange={handleInputChange}
      />
    </form>
  );
};

CategoryAdd.protoTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default CategoryAdd;
