import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Produtos from './pages/Produtos'

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Primeira</Link> |{" "}
        <Link to="/sobre">Segunda</Link> |{" "}
        <Link to="/produtos">terceira</Link> |{" "}
        <Link to="/contato">Quarta</Link>
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
