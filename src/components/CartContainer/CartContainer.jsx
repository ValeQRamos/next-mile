import "./CartContainer.css";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const CartContainer = () => {
  const { cartList, clearCart, removeItem, totalToPay } = useCartContext();

  const clearBtn = () => {
    clearCart();
    toast("All items removed from your cart");
  };

  const removeBtn = (id, title) => {
    removeItem(id);
    toast(`${title} Removed from your cart`);
  };

  {
    return cartList.length ? (
      <div className="cart-container">
        {cartList.map((prod) => (
          <div key={prod.id} className="cart-item-container">
            <img
              className="cart-img"
              src={prod.img[4]}
              width={150}
              alt={prod.title}
            />
            <label>
              <p className="cart-info">
                {prod.title} | Price: ${prod.price} | Qty: {prod.quantity}
              </p>
            </label>
            <button
              className="remove-item"
              onClick={() => removeBtn(prod.id, prod.title)}
            >
              X
            </button>
          </div>
        ))}
        <h2 className="cart-total">
          Total: <span> ${totalToPay()} </span>
        </h2>
        <div className="clear-cart-container">
          <button className="clear-cart" onClick={clearBtn}>
            Clear Cart
          </button>
          <Link to={"/checkout"} className="clear-cart checkout-cart">
            Checkout
          </Link>
        </div>
      </div>
    ) : (
      <div className="empty-container">
        <h1 className="empty-cart">Empty Cart</h1>
        <motion.div className="empty-btn-container" whileHover={{ scale: 1.1 }}>
          <Link to="/">Back To Home</Link>
        </motion.div>
      </div>
    );
  }
};
export default CartContainer;
