import React from "react";
export default function signup() {
  return (
  <>
    <section class="bg-gradient position-relative h-100vh">   
            <div class="bg-overlay-home" style={{backgroundimage: `url(images/animation.png);`}}></div>         
            <div class="home-table">
                <div class="home-table-center">
                    <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <div class="text-center">
                            <p class="mb-4 pb-3"><a href="index.html" class="text-white">Voltar para Home <i class="mdi mdi-home"></i></a></p>
                        </div>
                        <div class="account_box bg-gradient">
                            <img src="images/logo.png" alt="" class="img-fluid mx-auto d-block" style={{height: `32px;`}}/>
                            <form>
                                <div class="col-lg-12 mt-3">
                                    <label class="text-white">Email</label>
                                    <input type="email" id="exampleInputEmail1" class="form-control trial-input" placeholder="Email Id"/>
                                </div>
                                <div class="col-lg-12 mt-3">
                                    <label class="text-white">Senha</label>
                                    <input type="password" id="password1" class="form-control trial-input" placeholder="Password"/>
                                </div>
                                <div class="col-lg-12 mt-3">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                        <label class="custom-control-label text-white" for="customCheck1">Lembre de mim</label>
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
        </section>
        </>
  );
}