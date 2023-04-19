import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProducts } from "../../utils/data";
import Loading from "../Loading/Loading";
import Hero from "../Hero/Hero";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { type } = useParams();

  useEffect(() => {
    if (!type) {
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
    } else {
      getProducts()
        .then((response) => {
          setProducts(response.filter((product) => product.type === type));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [type]);

  if (isLoading) return <Loading />;

  return (
    <>
      {/* Activar Hero luego */}
      {/* <Hero /> */}
      <section className="container content">
        <h2 className="item-title"> {greeting} </h2>
        <div className="item-list">
          <ItemList products={products} />
        </div>
      </section>
    </>
  );
};
export default ItemListContainer;
