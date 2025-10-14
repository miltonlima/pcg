import React, { useState } from "react";
import "./Sobre.css";
import logoSesc from "../assets/sesc-logo.png";
import { useNavigate } from "react-router-dom";

export default function Sobre() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [maiorIdade, setMaiorIdade] = useState(true);

  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(value);
  };

  const handleProsseguir = () => {
    navigate("/produtos", { state: { cpf } });
  };

  function isValidCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let sum = 0,
      rest;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf[9])) return false;
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf[10])) return false;
    return true;
  }

  return (
    <div className="sobre-container">
      <div className="sobre-card">
        <img src={logoSesc} alt="SESC" className="sobre-logo" />
        <h2 className="sobre-titulo">Programa de Comprometimento e Gratuidade (PCG)</h2>

        <p className="sobre-subtitulo">Eu sou</p>
        <div className="sobre-botoes">
          <button
            className={`sobre-botao${maiorIdade ? " ativo" : ""}`}
            onClick={() => setMaiorIdade(true)}
            type="button"
          >
            Maior de 18 anos
          </button>
          <button
            className={`sobre-botao${!maiorIdade ? " ativo" : ""}`}
            onClick={() => setMaiorIdade(false)}
            type="button"
          >
            Menor de 18 anos
          </button>
        </div>

        <label className="sobre-label">Por favor, informe seu CPF:</label>
        <input
          type="text"
          placeholder="Informe seu CPF"
          className="sobre-input"
          value={cpf}
          onChange={handleCpfChange}
          maxLength={14}
        />

        <button
          className="sobre-prosseguir"
          onClick={handleProsseguir}
          disabled={!isValidCPF(cpf)}
        >
          PROSSEGUIR
        </button>
      </div>
    </div>
  );
}
