import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ItemListContainer title='Main Title Soon...' />
    </>
  );
}

export default App;
