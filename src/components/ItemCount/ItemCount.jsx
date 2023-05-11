import "./ItemCount.css";
import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { motion } from "framer-motion";

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
        <div className="increment-decrement-container">
          <motion.div
            className="motion"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiOutlineMinus onClick={decrement} />
          </motion.div>
          <h4 className="item-count-quantity"> {quantity} </h4>
          <motion.div
            className="motion"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiOutlinePlus onClick={increment} />
          </motion.div>
        </div>
      </div>
      <div className="btn-quantity-container">
        <motion.button
          className="btn btn-quantity"
          whileHover={{ scale: 1.1 }}
          onClick={() => onAdd(quantity)}
        >
          Add to cart
        </motion.button>
      </div>
    </div>
  );
};
export default ItemCount;
