import HeroSlider from "../components/HeroSlider/HeroSlider";
import Sobre from '../components/Sobre/Sobre'
import Servicos from '../components/Servicos/Servicos'
import Contatosection from '../components/Contatosection/Contato'
import '@fortawesome/fontawesome-free/js/all.js';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Sobre />
      <Servicos />
      <Contatosection />
      
    </>
  );
}
