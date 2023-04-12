import { useState, useEffect } from "react";
import { getProducts } from "../../utils/data";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section className="container content">
      <h2 className="item-title"> {greeting} </h2>
      <div className="item-list">
        <ItemList products={products} />
      </div>
    </section>
  );
};
export default ItemListContainer;
