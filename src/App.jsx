import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contact } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
