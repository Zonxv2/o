import "./Navbar.css";
import { CartWidget } from "../../common/CartWidget/CartWidget";
export const Navbar = () => {
  return (
    <div className="container-navbar">
      <img
        src="https://res.cloudinary.com/drbtidadg/image/upload/v1728670107/Logo_rsrecj.png"
        alt="logo"
        width={200}
      />
      <ul style={{ display: "flex", gap: 200 }}>
        <li>Pokemon</li>
        <li>Pokeballs</li>
        <li>Suplementos</li>
      </ul>
      <CartWidget />
    </div>
  );
};
