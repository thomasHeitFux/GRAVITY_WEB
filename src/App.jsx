import { Home, Services, Contact, About, Clientes } from "./pages";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { FloatingBar, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <FloatingBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
