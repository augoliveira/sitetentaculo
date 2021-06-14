import React from "react";

export default function HeroSlider() {
  return (
    <>
    

    <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-left">
          <img src="images/banner-01.webp" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  Gerencie seus <br/>Documentos <br/>de um modo <br/>eficiente
                  </strong>
                </h1>
                <p className="m-b-40">
                ASSUMA O CONTROLE DAS INFORMAÇÕES DA {" "}
                  <br /> SUA EMPRESA COM A OTENTÁCULO.
                </p>
                <p>
                  <a className="btn hvr-hover" href="/serviços">
                    Saiba mais
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-right">
          <img src="images/banner-03.webp" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  Livre-se de tarefas<br/> repetitivas e <br/>desnecessárias.
                  </strong>
                </h1>
                <p className="m-b-40">
                Simplifique o básico para focar no principal: seu negócio.
                </p>
                <p>
                  <a className="btn hvr-hover" href="/contato">
                    Contratar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      
    </div> 
        </>
      
          
            
          
        
          
        
  );
}
