import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Info from './pages/Info'
import Contrato from './pages/Contrato'
import Sucesso from './pages/Sucesso'

export default function App() {
  const location = useLocation();
  const [cpfValido, setCpfValido] = useState(false);
  const [cpf, setCpf] = useState(""); // novo estado para CPF

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
        {(location.pathname !== "/sucesso" && (
          location.pathname !== "/info" || cpfValido
        )) && (
          <Link to={avancar} state={{ cpf }}>Avançar</Link>
        )}
      </nav>

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info setCpfValido={setCpfValido} cpf={cpf} setCpf={setCpf} />} />
          <Route path="/contrato" element={<Contrato />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </div>
    </div>
  )
}
