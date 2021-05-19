import React from "react";

export default function Sobre() {
  return (
    <section id="home" class="g-theme-bg-gray-light-v1 g-pt-90">
      <div class="container" />
      <div class="row">
        <div class="col-md-6 col-lg-4 ml-lg-auto d-flex text-center text-md-left g-font-size-16">
          <div class="col-lg-12 g-mb-20 g-mb-0--lg">
            <div class="text-uppercase g-mb-20">
              <h2 class="g-font-size-36 g-color-white mb-0">
                Fale com <strong>Especialista</strong>
              </h2>

              <p class="g-font-size-16 g-color-white mb-0">
                Temos uma equipe de profissionais pronta para atender as suas
                dúvidas e acelerar a eficiência operacional do seu negócio!
              </p>
            </div>

            <form>
              <div class="row">
                <div class="col-lg-12 g-mb-20 g-mb-0--lg">
                  <div class="form-group g-mb-30">
                    <input
                      id="inputGroup1_1"
                      class="form-control h-100 g-color-white g-placeholder-inherit g-bg-transparent g-bg-transparent--focus g-brd-white g-rounded-10 g-px-20 g-py-10"
                      type="text"
                      placeholder="Name"
                    ></input>
                  </div>

                  <div class="form-group g-mb-30">
                    <input
                      id="inputGroup1_2"
                      class="form-control h-100 g-color-white g-placeholder-inherit g-bg-transparent g-bg-transparent--focus g-brd-white g-rounded-10 g-px-20 g-py-10"
                      type="email"
                      placeholder="Email *"
                    ></input>
                  </div>
                </div>

                <div class="col-lg-12 g-mb-20 g-mb-0--lg">
                  <div class="form-group g-mb-30">
                    <textarea
                      id="inputGroup1_3"
                      class="form-control g-resize-none g-color-white g-placeholder-inherit g-bg-transparent g-bg-transparent--focus g-brd-white g-rounded-10 g-px-20 g-py-10"
                      rows="5"
                      placeholder="Menssagem"
                    ></textarea>
                  </div>

                  <div class="text-center text-md-right">
                    <button
                      class="btn u-btn-white btn-md text-uppercase g-font-weight-700 g-font-size-12 g-color-black g-rounded-10 g-py-10 g-px-25 mb-0"
                      type="submit"
                      role="button"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="col-md-6 col-lg-6 g-overflow-hidden">
          <img
            class="img-fluid slideInUp u-in-viewport"
            src="images/Tentáculo-mobile.png"
            alt="Image description"
          />
        </div>
      </div>
    </section>
  );
}
