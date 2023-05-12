import "./CheckoutForm.css";
import { useCartContext } from "../../context/CartContext";
import { motion } from "framer-motion";

const CheckoutForm = ({ handleChange, dataForm, creatingOrder }) => {
  const { totalToPay } = useCartContext();

  return (
    <div className="checkout-form">
      <h1>Checkout</h1>
      <form onSubmit={creatingOrder}>
        <div className="form-control">
          <input
            type="text"
            name="name"
            required={true}
            value={dataForm.name}
            onChange={handleChange}
          />
          <label>Name</label>
        </div>
        <div className="form-control">
          <input
            type="number"
            name="phone"
            required
            value={dataForm.phone}
            onChange={handleChange}
          />
          <label>Phone Number</label>
        </div>
        <div className="form-control">
          <input
            type="email"
            name="email"
            required
            value={dataForm.email}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>
        <div className="form-control">
          <input
            type="email"
            name="email2"
            required
            value={dataForm.email2}
            onChange={handleChange}
          />
          <label>Email </label>
        </div>
        <div className="create-order-text">
          <p>
            Total to pay: <span> ${totalToPay()} </span>{" "}
          </p>
          <small className="create-order-small">
            Fill in all the fields to complete order
          </small>
        </div>

        <motion.button
          className="create-order-btn"
          onClick={creatingOrder}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={
            !dataForm.name ||
            !dataForm.email ||
            !dataForm.phone ||
            dataForm.email !== dataForm.email2
              ? true
              : false
          }
        >
          Create Order
        </motion.button>
      </form>
    </div>
  );
};
export default CheckoutForm;
