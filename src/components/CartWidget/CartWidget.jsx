import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCartContext();
  return (
    <div className="cart">
      {totalItems() > 0 && (
        <li>
          <FaShoppingCart /> {totalItems()}
        </li>
      )}
    </div>
  );
};
export default CartWidget;
