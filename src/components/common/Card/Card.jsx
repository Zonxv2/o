import { Link } from "react-router-dom";
import "./Card.css";
export const Card = ({ title, price, stock, image, id }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "200px",
        height: "300px",
      }}
    >
      <h2>Titulo: {title}</h2>
      <h3>Precio: {price}</h3>
      <h3>Stock: {stock}</h3>
      <img src={image} alt="" style={{ width: "100px" }} />
      <Link to={`/ItemDetail/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};
