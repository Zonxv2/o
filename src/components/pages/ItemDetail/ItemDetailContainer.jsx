import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";
import { db } from "../../../firebaseConfig";

import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getTotalQuantity } = useContext(CartContext);

  let totalInCart = getTotalQuantity(id);

  const [items, setItems] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const docRef = doc(productsCollection, id);
    getDoc(docRef).then((res) => {
      setItems({ ...res.data(), id: res.id });
    });
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...items, quantity: cantidad };
    addToCart(objeto);
    toast.success("Producto agregado correctamente", {
      position: "bottom-right",
      closebutton: true,
    });
  };

  return (
    <ItemDetail
      items={items}
      agregarAlCarrito={agregarAlCarrito}
      totalInCart={totalInCart}
    />
  );
};

export default ItemDetailContainer;
