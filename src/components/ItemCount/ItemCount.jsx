import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="increment-decrement-container">
        <button className="btn btn-cart btn-decrement" onClick={decrement}>
          -
        </button>
        <h4 className="item-count-quantity"> {quantity} </h4>
        <button className="btn btn-cart btn-increment" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button className="btn btn-quantity" onClick={() => onAdd(quantity)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
