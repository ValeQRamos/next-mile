import ItemList from "./ItemList";

const ItemListContainer = ({ title }) => {
  return (
    <section className="container content">
      <h2 className="item-title"> {title} </h2>
      <div className="item-list">
        <ItemList />
      </div>
    </section>
  );
};
export default ItemListContainer;
