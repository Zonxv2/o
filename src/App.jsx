import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { Footer } from "./components/layout/Footer/Footer";
import CartContainer from "./components/pages/Cart/CartContainer";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/Cart" element={<CartContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<h2> 404 not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
