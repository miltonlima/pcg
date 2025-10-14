import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import sescLogo from "../assets/sesc-logo.png";

export default function Home() {
  const navigate = useNavigate();
  const [aceitouTermos, setAceitouTermos] = useState(false);

  const handleProsseguir = () => {
    if (aceitouTermos) {
      navigate("/info");
    }
  };

  return (
    <div className="home-container">
      <div className="card">
        <img
          src={sescLogo}
          alt="Sesc"
          className="logo"
        />

        <h2>Programa de Comprometimento e Gratuidade (PCG)</h2>

        <section>
          <h3>O QUE É O PCG?</h3>
          <p>
            O Programa de Comprometimento e Gratuidade (PCG) é uma iniciativa do Sesc em parceria
            com o Governo Federal, resultante de um acordo firmado com a Confederação Nacional do
            Comércio (CNC). Seu objetivo é ampliar o acesso às ações educativas gratuitas para
            pessoas de baixa renda, prioritariamente trabalhadores do comércio de bens, serviços e
            turismo, seus dependentes e estudantes da rede pública de educação básica, todos com
            renda familiar de até três salários-mínimos nacionais.
          </p>
          <p>
            O programa destina recursos para atividades de educação básica, continuada e outras
            ações educativas, promovendo valores fundamentais como acesso, inclusão e
            democratização. Por meio do PCG, o Sesc RJ oferece programas gratuitos nas áreas de
            Educação, Assistência, Cultura, Lazer e Saúde, garantindo uma alimentação mais completa e
            de qualidade, apoiando a formação integral e a melhoria da qualidade de vida dos
            comerciários, suas famílias e da comunidade em geral.
          </p>
        </section>

        <section>
          <h3>QUEM PODE PARTICIPAR?</h3>
          <ol>
            <li>Trabalhadores do comércio de bens, serviços e turismo e seus dependentes</li>
            <li>Estudantes da educação básica, matriculados e que frequentam</li>
            <li>Público em geral</li>
          </ol>
          <p>Desde que atendam ao critério de renda.</p>
        </section>

        <section>
          <h3>CRITÉRIO DE RENDA</h3>
          <p>
            Para participar, é necessário que a renda familiar per capita seja de até 2
            salários-mínimos nacionais.
          </p>
          <p>O que isso significa?</p>
          <ul>
            <li>Soma-se a renda total da família (salários, aposentadorias, pensões etc.);</li>
            <li>Divide-se pelo número de pessoas que moram no mesmo domicílio;</li>
            <li>O resultado não pode ser superior a 2 salários-mínimos nacionais.</li>
          </ul>
        </section>

        <section>
          <h3>DOCUMENTOS NECESSÁRIOS</h3>
          <p>Para se inscrever no PCG, o interessado precisa preencher:</p>
          <ul>
            <li>
              Autodeclaração de Renda / Autodeclaração de Renda para menor de idade (válida por 2
              anos);
            </li>
            <li>
              Termo de Compromisso / Termo de Compromisso para menor de idade (válido por 2 anos);
            </li>
          </ul>
          <p>
            Menores de 16 anos: Os documentos devem ser preenchidos pelo responsável legal.
            Acompanhar cópia digitalizada/autorização de uso de imagem e voz para fins de
            divulgação das ações do Sesc.
          </p>
        </section>

        <section>
          <h3>COMO PARTICIPAR?</h3>
          <ul>
            <li>Clique em “De acordo” e prossiga com o preenchimento.</li>
            <li>Procure uma Unidade Sesc mais próxima.</li>
            <li>Solicite informações sobre as atividades gratuitas oferecidas.</li>
          </ul>
        </section>

        <section>
          <h3>POR QUE O PCG É IMPORTANTE?</h3>
          <p>
            O PCG é uma oportunidade para ampliar o acesso à educação e às atividades de qualidade
            oferecidas por uma rede presente em todo o país. Ele ajuda a promover inclusão e o
            desenvolvimento das ações do Sesc em todo o Brasil. O programa oferta anualmente centenas
            de vagas gratuitas nas unidades do Sesc RJ.
          </p>
          <p>
            <strong>*Saiba Mais:</strong>{" "}
            <a
              href="https://www.sescrio.org.br/programa-de-comprometimento-e-gratuidade-pcg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Programa de Comprometimento e Gratuidade (PCG)
            </a>
          </p>
        </section>

        <div className="termos">
          <label>
            <input
              type="checkbox"
              checked={aceitouTermos}
              onChange={e => setAceitouTermos(e.target.checked)}
            />{" "}Li e aceito os termos apresentados no texto acima
          </label>
        </div>

        <button className="btn-prosseguir" onClick={handleProsseguir} disabled={!aceitouTermos}>PROSSEGUIR</button>
      </div>
    </div>
  );
}
