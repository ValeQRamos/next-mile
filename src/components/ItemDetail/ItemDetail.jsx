import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const { id, title, subtitle, type, price, stock, img, description } = product;

  const [readMore, setReadMore] = useState(false);

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
          <button className="btn-read-more" onClick={() => setReadMore(!readMore)}>
            {!readMore ? "show more..." : "show less"}
          </button>
        </p>
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad Agregada", quantity)}
        />
      </div>
    </div>
  );
};
export default ItemDetail;
