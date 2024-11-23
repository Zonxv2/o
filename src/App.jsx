import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import CartContainer from "./components/pages/Cart/CartContainer";
import { Navbar } from "./components/layout/Navbar/Navbar";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import Checkout from "./components/pages/Checkout/Checkout";
import { Toaster } from "sonner";
import { Footer } from "./components/layout/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Toaster duration={2000} richColors position="top-center" />
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/Cart" element={<CartContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<h2> 404 not found</h2>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
