import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartContainer.css";

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
  writeBatch,
} from "firebase/firestore";

const CartContainer = () => {
  const { cartList, clearCart, removeItem, totalToPay } = useCartContext();

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const creatingOrder = (e) => {
    e.preventDefault();

    const order = {};
    order.buyer = dataForm
    order.items = cartList.map(({ title, id, price }) => ({
      id,
      title,
      price,
    }));
    order.total = totalToPay();
    // console.log(order)

    const dbFirestore = getFirestore();

    // CREATE
    const orderCollection = collection(dbFirestore, "orders");
    addDoc(orderCollection, order)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));

    // UPDATE
    // const queryDoc = doc(dbFirestore, "products", "tAAXelm8guuXkn85FEEY");
    // updateDoc(queryDoc, { stock: 20 })
    //   .catch((error) => console.log(error))
    //   .finally(() => console.log("finalizo la actualización"));

    // BATCH
    // const queryDoc = doc(dbFirestore, "products", "tAAXelm8guuXkn85FEEY");
    // const queryDoc2 = doc(dbFirestore, "products", "cBE3Mfu7A3xuecrJFa7i");

    // const batch = writeBatch(dbFirestore);
    // batch.update(queryDoc, {stock: 33});
    // batch.update(queryDoc2, {stock: 33});

    // batch.commit();
  };

  const handleChange = (e) => {
    console.log("nombre del input", e.target.name);
    console.log("valor del input", e.target.value);
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  {
    return cartList.length ? (
      <div className="cart-container">
        {cartList.map((prod) => (
          <div key={prod.id} className="cart-item-container">
            <img
              className="cart-img"
              src={prod.img[4]}
              width={150}
              alt={prod.title}
            />
            <label>
              <p className="cart-info">
                {prod.title} | Price: ${prod.price} | Qty: {prod.quantity}
              </p>
            </label>
            <button className="remove-item" onClick={() => removeItem(prod.id)}>
              X
            </button>
          </div>
        ))}
        <h2 className="cart-total">
          TOTAL: <span> ${totalToPay()} </span>
        </h2>
        <div className="clear-cart-container">
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <div className="form">
          <form onSubmit={creatingOrder}>
            <input
              type="text"
              name="name"
              value={dataForm.name}
              onChange={handleChange}
              placeholder="enter your name"
            />
            <input
              type="number"
              name="phone"
              value={dataForm.phone}
              onChange={handleChange}
              placeholder="enter your phone number"
            />
            <input
              type="email"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
              placeholder="enter your email"
            />
            <button className="clear-cart" onClick={creatingOrder}>
              Create Order
            </button>
          </form>
        </div>
      </div>
    ) : (
      <div>
        <h1 className="empty-cart">Empty Cart</h1>
      </div>
    );
  }
};
export default CartContainer;
