import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const { id, title, subtitle, type, price, stock, img, description } = product;
  return (
    <div className="item-detail">
      <h1> {title} </h1>
      <ItemCount
        initial={1}
        stock={stock}
        onAdd={(quantity) => console.log("Cantidad Agregada", quantity)}
      />
    </div>
  );
};
export default ItemDetail;
