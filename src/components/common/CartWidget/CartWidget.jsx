import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import Badge from "@mui/material/Badge";
export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/Cart">
      <Badge badgeContent={cart.length} color="primary" showZero>
        <BsCart4 size={"22px"} />
      </Badge>
    </Link>
  );
};
