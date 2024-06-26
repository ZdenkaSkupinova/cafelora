import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../Components/Header/Header';
import { Banner } from '../Components/Banner/Banner'; 
import { Menu } from '../Components/Menu/Menu';
import { Gallery } from '../Components/Gallery/Gallery';
import { Contact } from '../Components/Contact/Contact';
import { Footer } from '../Components/Footer/Footer';



document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

