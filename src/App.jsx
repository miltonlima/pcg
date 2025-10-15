import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Info from './pages/Info'
import Contrato from './pages/Contrato'
import Sucesso from './pages/Sucesso'

export default function App() {
  const location = useLocation();
  let voltar = "/";
  let avancar = "/info";

  if (location.pathname === "/info") {
    voltar = "/";
    avancar = "/contrato";
  } else if (location.pathname === "/contrato") {
    voltar = "/Info";
    avancar = "/sucesso";
  } else if (location.pathname === "/contato") {
    voltar = "/contrato";
    avancar = "/contrato";
  } else if (location.pathname === "/sucesso") {
    voltar = "/contrato";
    avancar = "/sucesso";
  }


  return (
    <div className="center">
      <nav className="app-nav">
        {location.pathname !== "/" && (
          <Link to={voltar}>Voltar</Link>
        )}
        {location.pathname !== "/" && location.pathname !== "/sucesso" && (
          <span> | </span>
        )}

        {location.pathname !== "/sucesso" && (
          <Link to={avancar}>Avançar</Link>
        )}
      </nav>

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contrato" element={<Contrato />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </div>
    </div>
  )
}
