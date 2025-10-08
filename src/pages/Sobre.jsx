import React from "react";
import "./Sobre.css";
import logoSesc from "/sesc-logo.png"; // ajuste o caminho conforme a localização do seu logo

export default function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-card">
        <img src={logoSesc} alt="Sesc" className="sesc-logo" />

        <h2 className="titulo">
          Programa de Comprometimento e Gratuidade (PCG)
        </h2>

        <div className="secao-identificacao">
          <p className="subtitulo">Eu sou</p>
          <div className="botoes-identidade">
            <button className="botao botao-ativo">Maior de 18 anos</button>
            <button className="botao">Menor de 18 anos</button>
          </div>
        </div>

        <div className="secao-cpf">
          <label htmlFor="cpf" className="label-cpf">
            Por favor, informe seu CPF:
          </label>
          <input
            type="text"
            id="cpf"
            className="input-cpf"
            placeholder="Informe seu cpf"
          />
        </div>

        <button className="botao-prosseguir">PROSSEGUIR</button>
      </div>
    </div>
  );
}
