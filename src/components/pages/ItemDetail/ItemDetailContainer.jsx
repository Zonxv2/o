import { useEffect, useState } from "react";
import { products } from "../../../Products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [items, setItems] = useState({});

  useEffect(() => {
    let producSelected = products.find((producto) => producto.id === id);
    setItems(producSelected);
  }, [id]);

  return <ItemDetail items={items} />;
};

export default ItemDetailContainer;
