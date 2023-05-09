import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";
import CartContainer from "./components/CartContainer/CartContainer";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Something cool..." />
            }
          />
          <Route
            path="/category/:type"
            element={
              <ItemListContainer greeting="Something cool..." />
            }
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
