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
      <div class="navigation">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="index.js">
                    <img src="/images/Tent195161culo-logo.webp" alt="logo"/>
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
