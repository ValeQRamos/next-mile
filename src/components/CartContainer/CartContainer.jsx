import { useCartContext } from "../../context/CartContext";
const CartContainer = () => {
  const { cartList, clearCart, removeItem, totalToPay } = useCartContext();

  return (
    <div>
      <br /> <br /> <br /> <br /> <br />
      <h1>Cart</h1>
      <div>
        {cartList.map((prod) => (
          <div key={prod.id}>
            <img src={prod.img} width={150} alt={prod.title} />
            <label>
              Price:{prod.price} Quantity:{prod.quantity}
            </label>
            <button onClick={() => removeItem(prod.id)}> X </button>
          </div>
        ))}
        <h1>total ${totalToPay()} </h1>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};
export default CartContainer;
