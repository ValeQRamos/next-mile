import "./Item.css";
import { Link } from "react-router-dom";

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
          <button className="btn btn-details">More Details</button>
        </Link>
      </header>
      <div className="item-img">
        <img src={img[0]} alt={title} />
      </div>
      <footer className="item-footer">
        <h3>{title}</h3>
        <h4> {subtitle} </h4>
      </footer>
    </div>
  );
};
export default Item;
