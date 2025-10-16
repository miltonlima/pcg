import React, { useState } from "react";
import "./Info.css";
import logoSesc from "../assets/sesc-logo.png";
import { useNavigate } from "react-router-dom";

function validarCpf(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  let soma = 0,
    resto;
  for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;
  return true;
}

export default function Info({ setCpfValido, cpf, setCpf }) {
  const navigate = useNavigate();
  const [maiorIdade, setMaiorIdade] = useState(true);

  const handleCpfChange = (e) => {
    const novoCpf = e.target.value.replace(/\D/g, "");
    setCpf(novoCpf);
    setCpfValido(validarCpf(novoCpf));
  };

  const handleProsseguir = () => {
    navigate("/contrato", { state: { cpf } });
  };

  const cpfEstaValido = validarCpf(cpf); // novo: checagem local para controle de exibição

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
        <div className="sobre-botoes-inline">
          <button className="botao-validar" onClick={() => navigate("/")}>
            VOLTAR
          </button>
          {cpfEstaValido && (
            <button
              className="sobre-prosseguir"
              onClick={handleProsseguir}
            >
              PROSSEGUIR
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
