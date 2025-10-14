import React from "react";
import "./Contato.css";
import sescLogo from "../assets/sesc-logo.png";

const Contato = () => {
  return (
    <div className="contato-container">
      <div className="contato-card">
        <img src={sescLogo} alt="SESC" className="contato-logo" />
        <h2 className="contato-titulo">
          Programa de Comprometimento e Gratuidade (PCG)
        </h2>
        <h3 className="contato-subtitulo">
          Envie uma foto ou faça upload do arquivo:
        </h3>

        <div className="contato-upload">
          <p>clique aqui ou arraste o arquivo</p>
          <span>PDF, PNG, JPG ou DOC (máx. 3MB)</span>
        </div>

        <button className="contato-btn">PROSSEGUIR</button>
      </div>
    </div>
  );
};

export default Contato;
