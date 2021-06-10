import React from "react";
import Link from "next/link";

import TopBar from "../TopBar/TopBar";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItemsCount = useSelector((state) => state.cart.length);
  return (
    <>
      <TopBar />
      <header className="main-header">
      <div class="top-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="list-inline text-lg-right text-center">
                        <li class="list-inline-item">
                            <a href="mailto:comercial@otentaculo.com.br">comercial@otentaculo.com.br</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="callto:1234565523">Ligue para nós agora:
                                <span class="ml-2"> (61) 98625 7790</span>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" id="searchOpen">
                                <i class="ti-search"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

      <div class="navigation">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="index.html">
                    <img src="/images/Tentáculo-logo.png" alt="logo"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">

                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link">HOME</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">SOBRE-NÓS</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/Servico">
                    <a className="nav-link">SERVIÇOS/PRODUTOS</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contato">
                    <a className="nav-link">CONTATO</a>
                  </Link>
                </li>
              </ul>
            </div>
           
          
        </nav>
        </div>
        </div>
      </header>
    </>
  );
}
