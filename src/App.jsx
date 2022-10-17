import { Home, Services, Contact, About, Clientes } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingBar, ModalBrand } from "./components";
import { useSelector } from "react-redux"
import "./App.css";

function App() {
  const modal = useSelector(state => state.modal)
  
  return (
    <BrowserRouter>
      <FloatingBar />
      {modal !== null && <ModalBrand />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
