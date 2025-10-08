import React from "react";
import "./Sobre.css";
import logoSesc from "../assets/sesc-logo.png";
import { useNavigate } from "react-router-dom";

export default function Sobre() {
  const navigate = useNavigate();

  const handleProsseguir = () => {
    navigate("/produtos"); // redireciona para a página Produtos.jsx
  };

  return (
    <div className="sobre-container">
      <div className="sobre-card">
        <img src={logoSesc} alt="SESC" className="sobre-logo" />
        <h2 className="sobre-titulo">Programa de Comprometimento e Gratuidade (PCG)</h2>

        <p className="sobre-subtitulo">Eu sou</p>
        <div className="sobre-botoes">
          <button className="sobre-botao ativo">Maior de 18 anos</button>
          <button className="sobre-botao">Menor de 18 anos</button>
        </div>

        <label className="sobre-label">Por favor, informe seu CPF:</label>
        <input
          type="text"
          placeholder="Informe seu CPF"
          className="sobre-input"
        />

        <button className="sobre-prosseguir" onClick={handleProsseguir}>
          PROSSEGUIR
        </button>
      </div>
    </div>
  );
}
