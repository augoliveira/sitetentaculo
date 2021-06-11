import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox contato/PageTitleBox";
import Contato from "../components/Contatosection/Contato";
//import OurTeam from "";


export default function contato() {
  return (
    <>
      <PageTitleBox />
      <section class="bg-gradient position-relative h-100vh">
        <div class="bg-overlay-home" style={{ backgroundimage: `url(images/animation.png);` }}>
          <div class="home-table">
            <div class="home-table-center">
              <div class="container">
              
                <img src="assets/images/bg.png" class="contact-info-one__bg-shape-1" alt="" />
                <div class="row">
                  <div class="col-lg-6">
                    <div class="contact-info-one__single">
                      <div class="contact-info-one__icon">
                        <i class="fa fa-phone"></i>
                      </div>
                      <div class="contact-info-one__content">
                        <h3 class="g-font-size-30 g-color-white mb-0">Contato:</h3>
                        <h5><a href="tel:6198625-7790">(61) 98625-7790</a></h5>
                      </div>
                    </div>
                    
                    <div class="col-lg-12">
                      <div class="contact-info-one__single">
                        <div class="contact-info-one__icon">
                          <i class="fa fa-envelope"></i>
                        </div>
                        <div class="contact-info-one__content">
                          <h3 class="g-font-size-30 g-color-white mb-0">Nosso E-mail:</h3>
                          <h5 ><a href="mailto:comercial@otentaculo.com.br">comercial@otentaculo.com.br</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <div class="col-lg-6">
                      <div class="text-center">
                        <p class="mb-4 pb-3"><a href="index.html" class="text-white">Voltar para Home <i class="mdi mdi-home"></i></a></p>
                      </div>
                      <div class="account_box bg-gradient">
                        <img src="images/logo.png" alt="contato" class="img-fluid mx-auto d-block" style={{ height: `32px;` }} />
                        <form>
                          <div class="col-lg-12 mt-3">
                            <label class="text-white">Email</label>
                            <input type="email" id="exampleInputEmail1" class="form-control trial-input" placeholder="Email" />
                          </div>
                          <div class="col-lg-12 mt-3">
                            <label class="text-white">Senha</label>
                            <input type="password" id="password1" class="form-control trial-input" placeholder="Senha" />
                          </div>
                          <div class="col-lg-12 mt-3">
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="customCheck1" />
                              <label class="custom-control-label text-white" for="customCheck1">Lebrar minha senha</label>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <button class="btn btn-custom w-100 mt-3">Entrar</button>
                          </div>
                          <div>
                            <p class="mb-0 text-center mt-3"><a href="forgot.html" class="text-white font-weight-bold">Esqueceu sua senha ?</a></p>
                          </div>
                        </form>
                      </div>
                      <div class="text-center mt-4">
                        <p><small class="text-white mr-2">Não tem uma conta?</small> <a href="signup.html" class="text-white font-weight-bold">Crie a sua conta aqui</a></p>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
       
      </section>

      <Contato />
    </>
  );
}
