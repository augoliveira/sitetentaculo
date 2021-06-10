import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import Contato from "../components/Contatosection/Contato";
import PageTitleBox from "../components/PageTitleBox servicos/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function Servico() {
  return (
    <>
      <PageTitleBox />
      <section id="about" class="about section-bg">
        <div class="container aos-init aos-animate" data-aos="fade-up">



        </div>

        <div class="row">
          <div class="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
            <img src="assets/img/about.jpg" class="img-fluid" alt="" />
          </div>

          <div class="col-lg-4 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="section-title">
              <h2>OTentáculo</h2>
              <h5>é uma plataforma de serviços integrados, que tem por objetivo aproximar a gestão de serviços ao negócio.</h5>
              <p>Em um mundo corporativo cada vez mais competitivo, a otimização de processos, centralização das demandas e integração dos setores é fundamental para tomada de decisões, ganho de produtividade e entrega de resultados.
              OTentáculo por meio de módulos simplificados, centraliza o fluxo de demandas, organiza, gerencia e controla informações, sempre priorizando a transparência e a agilidade nos resultados. </p>
            
            <h6>
              Com a plataforma, todos os usuários poderão solicitar serviços, analisar documentos, realizar checklists e formalizar ocorrências internas.
            </h6>
            </div>
            <ul>
              <li>
                <i class="bx bx-store-alt"></i>
                <div>

                </div>
              </li>

            </ul>

          </div>
        </div>


      </section>
      <section class="translate-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-6 mb-4 mb-lg-0">
              <div class="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <h4 class="mb-4">1.0 GESTÃO DE CHAMADOS</h4>
                <h6>Garanta que a sua empresa tenha controle centralizado sobre os serviços</h6>
                <p>Com o módulo de gestão de serviços você poderá controlar e organizar chamados,
                otimizar a gestão de atendimentos e monitorar a agilidade, produtividade e eficiência nos atendimentos aos usuários,
                garantindo também maior controle da gestão dos seus ativos e desempenho de cada equipe de atendimento.</p>
                <h6>Com o uso de chamados você pode:</h6>
                <p>   Centralizar demandas de vários setores
                Economizar tempo e reduzir custos
                Melhorar a produtividade dos departamentos
                Aumentar a satisfação dos usuários</p>
                <button>Reduza prejuízos à operação do seu negócio e garanta um melhor nível de serviço e disponibilidade</button>
              </div>
            </div>

            <div class="col-lg-6 col-sm-6 mb-4 mb-lg-0">
              <div class="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <h4 class="mb-4">2.0 GESTÃO DE OCORRÊNCIAS</h4>
                <h6>Garantir mais controle e qualidade para a sua organização.</h6>
                <p>Com o módulo de gestão de ocorrências é possível realizar a gestão de acontecimentos, eventos ou eventualidades no seu ambiente corporativo, podendo ser classificado como uma não-conformidade ou resultando em um chamado. 
                  Evitando um impacto significativo sobre o seu negócio.</p>
                 <h6>Com gestão de ocorrências você pode:</h6>
                 <p>  Previsibilidade e monitoramento operacional
                Melhorias na satisfação dos clientes
                Descobertas de novos processos
                Visibilidade na gestão</p>
              <button>Reduza gastos com atrasos, incidentes e danos</button>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 mb-4 mb-lg-0">
              <div class="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <h4 class="mb-4">3.0 GESTÃO DE DOCUMENTOS</h4>
                <h6>Garanta centralização de documentos fundamentais para sua operação.</h6>
                <p>Com o módulo de gestão de documentos você poderá ter as informações de sua empresa em um único lugar, 
                  eliminando perda e extravios, controlando versões, fornecendo rastreabilidade e visualização rápida sempre que necessário. 
                  Evitando um impacto significativo sobre o seu negócio.</p>
                 <h6>Com gestão de documentos você pode:</h6>
                 <p>     Encontrar documento vigente
                  Visualizar dados das etapas de documentação
                  Aproximar equipes, gerencie filas de trabalho
                  Racionalizar a produção documental
                  Controlar o fluxo de documentos e a organização dos arquivos</p>
              <button>Não perca documentos por falta<br/> de organização</button>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 mb-4 mb-lg-0">
              <div class="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <h4 class="mb-4">4.0 GESTÃO DE CHECKLISTS</h4>
                <h6>Garanta a padronização de seus processos, evite não conformidades.</h6>
                <p>Com o módulo de checklist você poderá acompanhar e resguardar sua operação. Por meio de checagens e validações mantenha seu ambiente controlado, 
                  seguro e de acordo com suas especificações. </p>
                 <h6>Com o uso de chamados você pode:</h6>
                 <p>  Realize inspeções de segurança
                  Manter os padrões em todas as unidades
                  Padronizar processos e controlar a qualidade
                  Manter seu negócio de acordo com a legislação e as normas reguladoras
                  Monitorar entrega de equipes externas</p>
              <button>Eleve a maturidade operacional do seu negócio</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about section-bgserviços">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        </div>

        <div class="row">
          <div class="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
            <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-4 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="section-title">
          <h2 class="g-font-size-36 g-color-white mb-0">
            <img src="/images/icon-Tentáculo.png" class="img-fluid" alt=""/> POR QUE OTENTÁCULO?</h2>
            <div class="features_list">
                                    <p class="text-muted mb-2"><span><i class="fas fa-angle-double-right"></i></span> Redução de custos</p>
                                    <p class="text-muted mb-2"><span><i class="fas fa-angle-double-right"></i></span> Controle das atividades</p>
                                    <p class="text-muted mb-2"><span><i class="fas fa-angle-double-right"></i></span> Satisfação dos usuários</p>
                                    <p class="text-muted mb-2"><span><i class="fas fa-angle-double-right"></i></span> Aumento de produtividade</p>
                                    <p class="text-muted mb-2"><span><i class="fas fa-angle-double-right"></i></span> Indicadores de Performance</p>
                                    <p class="text-muted mb-2"><span><i class="fas fa-angle-double-right"></i></span> Comunicação setorial eficiente</p>
                                    <p class="text-muted mb-2"><span><i class="fas fa-angle-double-right"></i></span> Suporte operacional centralizado</p>
                                    <p class="text-muted mb-2"><span><i class="fas fa-angle-double-right"></i></span> Ganho de qualidade nos serviços prestados</p>
                                </div>
        </div>
            <ul>
              <li>
                <i class="bx bx-store-alt"></i>
                <div>
                  
                </div>
              </li>
             
            </ul>
            
          </div>
        </div>

      
    </section>
    <Contato />
    </>

  );
}

<div className="row special-list">{Servico}</div>;