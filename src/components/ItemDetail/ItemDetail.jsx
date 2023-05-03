import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

const ItemDetail = ({ product }) => {
  const { title, subtitle, price, stock, img, description } = product;

  const [quantityAdded, setQuantityAdd] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [photoDisplay, setPhotoDisplay] = useState(0);

  const { addToCart } = useCartContext();

  const handleNext = () => {
    photoDisplay < img.length - 1
      ? setPhotoDisplay(photoDisplay + 1)
      : setPhotoDisplay(0);
  };

  const handlePrev = () => {
    photoDisplay > 0
      ? setPhotoDisplay(photoDisplay - 1)
      : setPhotoDisplay(img.length - 1);
  };

  const handleOnAdd = (quantity) => {
    addToCart({ ...product, quantity });
    setQuantityAdd(quantity);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-img">
        <button className="item-detail-btn" onClick={handlePrev}>
          <BiCaretLeft className="item-detail-arrow" />
        </button>
        <img src={img[photoDisplay]} alt={title} />
        <button className="item-detail-btn" onClick={handleNext}>
          <BiCaretRight className="item-detail-arrow" />
        </button>
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
