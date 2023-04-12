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
      <button onClick={decrement}> - </button>
      <h4> {quantity} </h4>
      <button onClick={increment}> + </button>
      <div>
        <button onClick={() => onAdd(quantity)}>Add to cart</button>
      </div>
    </div>
  );
};
export default ItemCount;
