import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

// Components
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";
import CartContainer from "./components/CartContainer/CartContainer";
import Checkout from "./components/Checkout/Checkout";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="What's next" />}
          />
          <Route
            path="/category/:type"
            element={<ItemListContainer greeting="What's next" />}
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          closeOnClick
          hideProgressBar={false}
          theme="light"
        />
      </Router>
    </CartContextProvider>
  );
}

export default App;
