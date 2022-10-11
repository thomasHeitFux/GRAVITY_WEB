import { Home, Services, Contact, About, Clientes } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingBar, ModalBrand } from "./components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <FloatingBar />
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
