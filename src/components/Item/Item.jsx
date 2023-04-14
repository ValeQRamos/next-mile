import "./Item.css";

const Item = ({ product }) => {
  const { title, subtitle, stock, img } = product;
  // type , price , description
  return (
    <div className="item">
      <header className="item-header">
        <div className="stock-container">
          <p>
            Stock Available: <span> {stock} </span>
          </p>
        </div>
        <button className="btn btn-details">More Details</button>
      </header>
      <div className="item-img">
        <img src={img} alt={title} />
      </div>
      <footer className="item-footer">
        <h3>{title}</h3>
        <h4> {subtitle} </h4>
      </footer>
    </div>
  );
};
export default Item;
