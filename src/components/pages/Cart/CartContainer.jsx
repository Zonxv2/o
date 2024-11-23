import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalEnElCarrito = getTotalAmount();

  return (
    <div>
      <h1 style={{ alignContent: "center" }}>Pokecarro</h1>

      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>Cantidad: {product.quantity}</h3>
            <button onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}
      {cart.length > 0 && <button onClick={resetCart}>Limpiar carrito</button>}
      <h2>El total a pagar es {totalEnElCarrito}</h2>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default CartContainer;
