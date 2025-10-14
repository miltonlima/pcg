import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Produtos from './pages/Produtos'

export default function App() {
  const location = useLocation();
  let voltar = "/";
  let avancar = "/sobre";

  if (location.pathname === "/sobre") {
    voltar = "/";
    avancar = "/produtos";
  } else if (location.pathname === "/produtos") {
    voltar = "/sobre";
    avancar = "/contato";
  } else if (location.pathname === "/contato") {
    voltar = "/produtos";
    avancar = "/contato";
  }

  return (
    <div className="center black-board">
      <nav className="app-nav">
        <Link to="/">Início</Link>
        <span> | </span>
        <Link to={voltar}>Voltar</Link>
        <span> | </span>
        <Link to={avancar}>Avançar</Link>
        <span> | </span>
        <Link to="/contato">Final</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  )
}
