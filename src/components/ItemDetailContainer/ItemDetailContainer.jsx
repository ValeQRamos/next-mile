import { useState, useEffect } from "react";
import { getProductById } from "../../utils/data";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(1)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
};
export default ItemDetailContainer;
