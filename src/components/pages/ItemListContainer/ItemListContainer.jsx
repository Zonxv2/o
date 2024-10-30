import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../Products";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      resolve(products);
    });
    getProducts.then((res) => {
      setItems(res);
    });
  }, []);
  return <ItemList items={items} />;
};
