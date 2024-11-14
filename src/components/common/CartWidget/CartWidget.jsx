import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  return (
    <div>
      <Link to="/Cart">
        <BsCart4 />
        <span>0</span>
      </Link>
    </div>
  );
};
