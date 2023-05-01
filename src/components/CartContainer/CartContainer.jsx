import { useCartContext } from "../../context/CartContext";
import "./CartContainer.css";
const CartContainer = () => {
  const { cartList, clearCart, removeItem, totalToPay, totalItems } =
    useCartContext();

  {
    return cartList.length ? (
      <div className="cart-container">
        {cartList.map((prod) => (
          <div key={prod.id} className="cart-item-container">
            <img
              className="cart-img"
              src={prod.img}
              width={150}
              alt={prod.title}
            />
            <label>
              <p className="cart-info">
                {prod.title} | Price: ${prod.price} | Qty: {prod.quantity}
              </p>
            </label>
            <button className="remove-item" onClick={() => removeItem(prod.id)}>
              X
            </button>
          </div>
        ))}
        <h2 className="cart-total">
          TOTAL: <span> ${totalToPay()} </span>
        </h2>
        <div className="clear-cart-container">
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    ) : (
      <div>
        <h1 className="empty-cart">Empty Cart</h1>
      </div>
    );
  }
};
export default CartContainer;
