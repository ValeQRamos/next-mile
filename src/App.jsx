import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Main Title Soon..." />} />
        <Route path="/detail" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
