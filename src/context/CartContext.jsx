import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (newProduct) => {
    if (!isInCart(newProduct.id)) {
      setCartList([...cartList, newProduct]);
    } else {
      let product = cartList.find((prod) => prod.id === newProduct.id);
      product.quantity += newProduct.quantity;
    }
  };

  const removeItem = (id) => {
    const cartUpdated = cartList.filter((prod) => prod.id !== id);
    setCartList(cartUpdated);
  };

  const clearCart = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    return cartList.some((prod) => prod.id === id);
  };

  const totalToPay = () => {
    if (!cartList.length) return 0;
    return cartList
      .map((prod) => prod.price * prod.quantity)
      .reduce((a, b) => a + b)
      .toFixed(2);
  };

  const totalItems = () => {
    if (!cartList.length) return 0;
    return cartList.map((prod) => prod.quantity).reduce((a, b) => a + b);
  };

  // No duplicados

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeItem,
        clearCart,
        isInCart,
        totalToPay,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
