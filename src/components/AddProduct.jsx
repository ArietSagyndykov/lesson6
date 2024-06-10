import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const { addProduct } = useProducts();

  const handleClick = () => {
    if (!name || !img) {
      return;
    }

    let newProduct = {
      name,
      img,
    };
    addProduct(newProduct);
  };

  return (
    <div>
      <TextField
        onChange={(e) => setName(e.target.value)}
        id="filled-basic"
        label="name"
        variant="filled"
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        id="filled-basic"
        label="img"
        variant="filled"
      />
      <Button onClick={handleClick} variant="contained" color="success">
        ADD
      </Button>
    </div>
  );
};

export default AddProduct;
