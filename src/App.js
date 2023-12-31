import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/pages/Home.js";
import CadastrarOferta from "./components/pages/CadastrarOferta.js";
import DetalhesOferta from "./components/pages/DetalhesOferta.js";
import Container from "./components/layout/Container.js";
import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/oferta" element={<CadastrarOferta />} />
          <Route path="/detalhes/:id" element={<DetalhesOferta />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
