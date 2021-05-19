import React from "react";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>Sobre a Tentáculo</h4>
                  <p>
                    Tentáculo é um software para empresas que utilizam
                    checklists e planos de ação em auditorias ou inspeções de
                    processos, lojas, fábricas, veículos, pessoas, equipamentos
                    e ambientes.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4>Paginas</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Sobre-nós</a>
                    </li>
                    <li>
                      <a href="#">Serviços/Produtos</a>
                    </li>
                    <li>
                      <a href="#">Contato</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link-contact">
                  <h4>Contatos</h4>
                  <ul>
                    <li>
                      <p>
                        <i className="fas fa-map-marker-alt"> </i>Local:
                        colocar endereço aqui <br />
                        Brsília Distrito Federal,
                        <br /> Cep: aqui{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-phone-square"> </i>Tel:{" "}
                        <a href="tel:61986257790">61986257790</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-envelope"> </i>Email:{" "}
                        <a href="mailto:comercial@tantaculo.com.br">
                        comercial@tantaculo.com.br
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterCopyright />
    </>
  );
}
