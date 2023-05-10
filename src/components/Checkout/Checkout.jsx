import "./Checkout.css";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { HiOutlineCheckCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

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

    const dbFirestore = getFirestore();

    // CREATE order
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
          <h1> Your order is Completed </h1>
          <div className="order-id">
          <p> Order Id :</p>
          <p> {orderId}  </p>
          </div>
          <Link className="link-back" to="/">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-form-container">

      <CheckoutForm
        handleChange={handleChange}
        dataForm={dataForm}
        creatingOrder={creatingOrder}
      />
    </div>
  );
};
export default Checkout;
