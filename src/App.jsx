import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Produtos from './pages/Produtos'

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/sobre">Sobre</Link> |{" "}
        <Link to="/produtos">Produtos</Link> |{" "}
        <Link to="/contato">Contato</Link>
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
