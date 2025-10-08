import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sobre.css";

export default function Sobre() {
  const navigate = useNavigate();

  const handleProsseguir = () => {
    navigate("/produtos");
  };

  return (
    <div className="sobre">
      <div className="sobre-box">
        <img src="/sesc-logo.png" alt="Sesc" className="sobre-logo" />

        <h2 className="sobre-titulo">
          Programa de Comprometimento e Gratuidade (PCG)
        </h2>

        <div className="sobre-identificacao">
          <p className="sobre-label-eusou">Eu sou</p>
          <div className="sobre-botoes">
            <button className="btn btn-ativo">Maior de 18 anos</button>
            <button className="btn">Menor de 18 anos</button>
          </div>
        </div>

        <div className="sobre-cpf">
          <label htmlFor="cpf" className="sobre-label-cpf">
            Por favor, informe seu CPF:
          </label>
          <input
            type="text"
            id="cpf"
            className="sobre-input"
            placeholder="Informe seu cpf"
          />
        </div>

        <button className="btn-prosseguir" onClick={handleProsseguir}>
          PROSSEGUIR
        </button>
      </div>
    </div>
  );
}
