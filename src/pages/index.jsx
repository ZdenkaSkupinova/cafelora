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


const navButton = document.querySelector('.nav-btn');
const navMenu = document.querySelector('.rollout-nav');

navButton.addEventListener('click', () => {
  navMenu.classList.toggle('nav-closed');
});

const navLinks = document.querySelectorAll('.rollout-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('nav-closed');
  });
});


