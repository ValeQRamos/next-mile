import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const { id, title, subtitle, type, price, stock, img, description } = product;

  const [quantityAdded, setQuantityAdd] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const { addToCart } = useCartContext();

  const handleOnAdd = (quantity) => {
    addToCart({ ...product, quantity });
    setQuantityAdd(quantity);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-img">
        <img src={img} alt={title} />
      </div>
      <div className="item-detail-info">
        <h2 className="item-detail-title">
          {title} - <span> ${price} </span>
        </h2>
        <h4 className="item-detail-subtitle"> {subtitle} </h4>
        <p className="item-detail-description">
          {readMore ? description : description.substring(0, 100)}
          <button
            className="btn-read-more"
            onClick={() => setReadMore(!readMore)}
          >
            {!readMore ? "show more..." : "show less"}
          </button>
        </p>
        {quantityAdded > 0 ? (
          <div className="btn-checkout-container">
            <Link to="/cart">
              <button className="btn-checkout">Checkout</button>
            </Link>
          </div>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
