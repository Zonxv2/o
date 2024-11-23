import { useState } from "react";

const Counter = ({ stock, agregarAlCarrito, totalInCart }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (stock - totalInCart > contador) {
      setContador(contador + 1);
    } else {
      alert("Stock máximo alcanzado");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  const agregar = () => {
    agregarAlCarrito(contador); // Llama a la función para agregar el producto al carrito
  };
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <button onClick={sumar}>sumar</button>
      <h2>Contador= {contador}</h2>
      <button onClick={restar}>restar</button>

      <button onClick={agregar}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
