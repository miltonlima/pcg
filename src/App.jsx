import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Info from './pages/Info'
import Contato from './pages/Sucesso'
import Contrato from './pages/Contrato'

export default function App() {
  const location = useLocation();
  let voltar = "/";
  let avancar = "/info";

  if (location.pathname === "/info") {
    voltar = "/";
    avancar = "/contrato";
  } else if (location.pathname === "/contrato") {
    voltar = "/Info";
    avancar = "/contato";
  } else if (location.pathname === "/contato") {
    voltar = "/contrato";
    avancar = "/contato";
  }

  return (
    <div className="center">
      <nav className="app-nav">
        
        <Link to={voltar}>Voltar</Link>
        <span> | </span>
        <Link to={avancar}>Avançar</Link>
        
      </nav>

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contrato" element={<Contrato />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </div>
  )
}
