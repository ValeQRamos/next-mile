const CheckoutForm = ({handleChange, dataForm, creatingOrder}) => {
  return (
    <div className="checkout-form">
      <form onSubmit={creatingOrder}>
        <input
          type="text"
          name="name"
          value={dataForm.name}
          onChange={handleChange}
          placeholder="enter your name"
        />
        <br />
        <input
          type="number"
          name="phone"
          value={dataForm.phone}
          onChange={handleChange}
          placeholder="enter your phone number"
        />
        <br />
        <input
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleChange}
          placeholder="enter your email"
        />
        <br />
        <button className="clear-cart" onClick={creatingOrder}>
          Create Order
        </button>
      </form>
    </div>
  );
};
export default CheckoutForm;
