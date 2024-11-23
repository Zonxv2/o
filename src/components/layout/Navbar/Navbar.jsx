import "./Navbar.css";
import { CartWidget } from "../../common/CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";
export const Navbar = () => {
  return (
    <div className="container-navbar">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/drbtidadg/image/upload/v1728670107/Logo_rsrecj.png"
          alt="logo"
          width={200}
        />
      </Link>
      <ul style={{ display: "flex", gap: 200 }}>
        <Link to="/category/pokemon">Pokemon</Link>
        <Link to="/category/pokeballs">Pokeballs</Link>
        <Link to="/category/objetos">objetos</Link>
      </ul>
      <CartWidget />
    </div>
  );
};
