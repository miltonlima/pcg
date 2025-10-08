import React from "react";
import "./Produtos.css";
import sescLogo from "../assets/sesc-logo.png"; // ajuste o caminho conforme sua pasta

const Produtos = () => {
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
            Eu, &lt;NOME COMPLETO&gt;, nascido no dia &lt;DD/MM/AAAA&gt;, portador do CPF nº XX.XXX.XXX-XX, declaro e atesto que minha renda per capita familiar mensal não ultrapassa o valor de 2 (dois) salários mínimos nacionais, estando, assim, apto(a) a me candidatar/usufruir de uma vaga no Programa de Comprometimento e Gratuidade (PCG) do Serviço Social do Comércio (Sesc), atendendo à condição de baixa renda.
          </p>
          <p>Declaro também que:</p>
          <ol>
            <li>Recebi do Sesc todas as informações necessárias...</li>
            <li>Devo informar ao Sesc caso a renda per capita...</li>
            <li>Autorizo que o Sesc, em razão de minha participação...</li>
            <li>Autorizo o uso da minha imagem e voz...</li>
          </ol>
          <p>
            Rio de Janeiro, &lt;data atual&gt; de &lt;mês&gt; de &lt;ano&gt;.
          </p>
          <p>
            Para validar sua autodeclaração, você possui 2 alternativas:
          </p>
          <ul>
            <li>Informe seu telefone celular para receber um token de validação.</li>
            <li>Ou imprima a autodeclaração, preencha e assine, tire uma foto da autodeclaração assinada e faça upload da imagem/foto.</li>
          </ul>
        </div>

        <div className="produtos-botoes">
          <button className="btn-imprimir">IMPRIMIR E ASSINAR</button>
          <button className="btn-token">VALIDAR COM TOKEN</button>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
