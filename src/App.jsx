import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Main Title Soon..." />} />
        <Route path="/category/:type" element={<ItemListContainer greeting="Main Title Soon..." />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        {/* <Route path="*" element={<Navigate to='/' />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
