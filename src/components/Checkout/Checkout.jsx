import "./Checkout.css";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// React Icon
import { HiOutlineCheckCircle } from "react-icons/hi";

const Checkout = () => {
  const { cartList, clearCart, removeItem, totalToPay } = useCartContext();
  const [orderId, setOrderId] = useState("");

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const creatingOrder = (e) => {
    e.preventDefault();

    const order = {};
    order.buyer = dataForm;
    order.items = cartList.map(({ title, id, price, quantity }) => ({
      id,
      title,
      price,
      quantity,
    }));
    order.total = totalToPay();
    console.log("ORDER:", order);

    const dbFirestore = getFirestore();

    // CREATE
    const orderCollection = collection(dbFirestore, "orders");
    addDoc(orderCollection, order)
      .then((resp) => setOrderId(resp.id))
      .catch((error) => console.log(error))
      .finally(() => clearCart());
  };

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  if (orderId) {
    return (
      <div className="order-confirmed-container">
        <div className="order-confirmed">
          <HiOutlineCheckCircle className="check-icon" />
          <h3> Hey {dataForm?.name} </h3>
          <h1> Your order is Confirmed! </h1>
          <p> Order Id : {orderId} </p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-form-container">
      <br /> <br /> <br /> <br /> <br />
      <h1> Checkout </h1>
      <CheckoutForm
        handleChange={handleChange}
        dataForm={dataForm}
        creatingOrder={creatingOrder}
      />
    </div>
  );
};
export default Checkout;
