import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Firestore
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

// Components
import Loading from "../Loading/Loading";
import Hero from "../Hero/Hero";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { type } = useParams();

  useEffect(() => {
    const dbFireStore = getFirestore();
    const queryCollection = collection(dbFireStore, "products");

    if (!type) {
      getDocs(queryCollection)
        .then((resp) =>
          setProducts(
            resp.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .catch((error) => console.log(error))
        .finally(setIsLoading(false));
    } else {
      const queryCollectionFiltered = query(
        queryCollection,
        where("type", "==", type)
      );

      getDocs(queryCollectionFiltered)
        .then((resp) =>
          setProducts(
            resp.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .catch((error) => console.log(error))
        .finally(setIsLoading(false));
    }
  }, [type]);

  if (isLoading) return <Loading />;

  return (
    <>
      {!type && <Hero />}
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
