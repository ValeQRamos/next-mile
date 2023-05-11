import "./Item.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Item = ({ product }) => {
  const { id, title, subtitle, stock, img } = product;

  return (
    <div className="item">
      <header className="item-header">
        <div className="stock-container">
          <p>
            Stock Available: <span> {stock} </span>
          </p>
        </div>
        <Link to={`/detail/${id}`} className="btn-details">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="btn btn-details"
          >
            More Details
          </motion.button>
        </Link>
      </header>
      <div className="item-img">
        <Link to={`/detail/${id}`}>
          <img src={img[0]} alt={title} />
        </Link>
      </div>
      <footer className="item-footer">
        <h3>{title}</h3>
        <h4> {subtitle} </h4>
      </footer>
    </div>
  );
};
export default Item;
