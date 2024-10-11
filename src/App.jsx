import { Navbar } from "./components/layout/Navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { Footer } from "./components/layout/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer Bienvenida="Bienvenido" />
      <Footer />
    </div>
  );
}

export default App;
