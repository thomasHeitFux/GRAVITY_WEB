import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Services } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
