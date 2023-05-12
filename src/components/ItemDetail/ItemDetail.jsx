import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { motion } from "framer-motion";

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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="item-detail-btn"
          onClick={handlePrev}
        >
          <BiCaretLeft className="item-detail-arrow" />
        </motion.button>
        <img src={img[photoDisplay]} alt={title} />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="item-detail-btn"
          onClick={handleNext}
        >
          <BiCaretRight className="item-detail-arrow" />
        </motion.button>
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
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="btn-checkout"
              >
                Checkout
              </motion.button>
            </Link>
          </div>
        ) : (
          <ItemCount
            title={title}
            initial={1}
            stock={stock}
            onAdd={handleOnAdd}
          />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
