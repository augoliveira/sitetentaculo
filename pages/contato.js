import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import Contato from "../components/Contatosection/Contato";
//import OurTeam from "";


export default function contato() {
  return (
    <>
      <PageTitleBox />
      
      <Contato />
    </>
  );
}
