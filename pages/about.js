import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import Contato from "../components/Contatosection/Contato";
//import OurTeam from "";


export default function About() {
  return (
    <>
      <PageTitleBox />
      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="noo-sh-title">
                NOSSA HISTORIA
              </h2>
              <p>
                Somos uma empresa com grande experiência em processos de postos de combustíveis. Trabalhamos há xxx anos no mercado com a mais alta tecnologia para integrar soluções de chamados, checklist, documentação e ocorrências em uma única plataforma.
                Nosso propósito é fornecer as melhores soluções processuais para a gestão do seu negócio e com isso aumentar seus resultados. Tudo isso em um sistema simples e intuitivo;
                Temos uma equipe formada por profissionais multidisciplinares e com expertise de mais de xxx anos de atuação com o apoio das maiores empresas de automação e um relacionamento sólido e duradouro com nossos clientes e parceiros.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div class="mb-4">
                <img src="/images/icone-1.png"></img>
              </div>
                <h3>Nossa missão</h3>
                <p>
                Ser a empresa número um na solução para as necessidades de serviços em postos de combustíveis.
                </p>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div class="mb-4">
                <img src="/images/icone-2.png"></img>
              </div>
                <h3>Nossa visão</h3>
                <p>
                Ser referência em qualidade e atendimento, consolidando a marca no mercado regional.
                </p>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div class="mb-4">
                <img src="/images/icone-3.png"></img>
              </div>
                <h3>Nossos Valores</h3>
                <p>
                Respeito Transparência Inovação Ética.
                </p>
            </div>
          </div>
          
        </div>
      </div>
      <Contato />
    </>
  );
}
