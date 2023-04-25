import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useCartContext();
  return (
    <div className="cart">
      {totalItems() > 0 && (
        <Link to="/cart">
          <FaShoppingCart /> {totalItems()}
        </Link>
      )}
    </div>
  );
};
export default CartWidget;
