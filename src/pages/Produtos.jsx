import React from "react";
import "./Produtos.css";
import sescLogo from "../assets/sesc-logo.png";
import { useNavigate } from "react-router-dom";

const Produtos = () => {
  const navigate = useNavigate();

  const handleImprimirAssinar = () => {
    navigate("/contato"); // 👉 redireciona para Contato.jsx
  };

  return (
    <div className="produtos-container">
      <div className="produtos-card">
        <img src={sescLogo} alt="SESC" className="produtos-logo" />
        <h2 className="produtos-titulo">
          Programa de Comprometimento e Gratuidade (PCG)
        </h2>

        <h3 className="produtos-subtitulo">AUTODECLARAÇÃO DE BAIXA RENDA</h3>

        <div className="produtos-texto">
          <p>
            Eu, &lt;NOME COMPLETO&gt;, nascido no dia &lt;DD/MM/AAAA&gt;,
            portador do CPF nº XX.XXX.XXX-XX, declaro e atesto que minha renda
            per capita familiar mensal não ultrapassa o valor de 2 (dois)
            salários mínimos nacionais, estando, assim, apto(a) a me
            candidatar/usufruir de uma vaga no Programa de Comprometimento e
            Gratuidade (PCG) do Serviço Social do Comércio (Sesc), atendendo à
            condição de baixa renda.
          </p>

          <p>Declaro também que:</p>
          <ul>
            <li>
              a) recebi do Sesc todas as informações necessárias para
              compreensão das condições que me habilitam a me inscrever,
              inclusive a definição de baixa renda, tendo conhecimento das
              Normas do Programa de Comprometimento e Gratuidade (PCG).
            </li>
            <li>
              b) devo informar ao Sesc caso a renda per capita familiar mensal
              ultrapasse 2 (dois) salários mínimos nacionais.
            </li>
            <li>
              c) autorizo que o Sesc, em razão de minha participação no PCG,
              disponha dos meus dados pessoais e dados pessoais sensíveis, de
              acordo com a Lei nº 13.709/2018 (LGPD).
            </li>
          </ul>

          <p>
            Rio de Janeiro, &lt;data atual&gt; de &lt;mês&gt; de &lt;ano&gt;.
          </p>
          <p>
            Para validar sua autodeclaração, você possui 2 alternativas:
            <br />• Informe seu telefone celular para receber um token de
            validação.  
            <br />• Ou imprima a autodeclaração, preencha as informações e
            assine.
          </p>
        </div>

        <div className="produtos-botoes">
          <button
            className="botao-imprimir"
            onClick={handleImprimirAssinar}
          >
            IMPRIMIR E ASSINAR
          </button>
          <button className="botao-validar">VALIDAR COM TOKEN</button>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
