import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ItemListContainer greeting="Main Title Soon..." />
      <ItemDetailContainer />
    </>
  );
}

export default App;
