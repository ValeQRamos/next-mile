import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Firestore
import { doc, getDoc, getFirestore } from "firebase/firestore";
// Components
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const dbFireStore = getFirestore();
    const queryDoc = doc(dbFireStore, "products", id);

    getDoc(queryDoc)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
};
export default ItemDetailContainer;
