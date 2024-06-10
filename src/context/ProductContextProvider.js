import React, { createContext, useContext, useReducer } from "react";

import axios from "axios";
import { API } from "../helpers/const";
export const useProducts = () => useContext(productContext);

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const INIT_STATE = {
    products: [],
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! Create
  const addProduct = async (product) => {
    await axios.post(API, product);
  };

  const getProducts = async () => {
    const { data } = await axios(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const values = {
    addProduct,
    getProducts,
    products: state.products,
  };

  //!GET
  //? 1) создать    INIT_STATE в котором бует лежавть начальное состояние;
  //? 2) создать функцию reducer в котром прописывается switch на проверку action.type
  //? 3) вызвать хук useREducer (reducer,INITSTATE) возвразает

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
