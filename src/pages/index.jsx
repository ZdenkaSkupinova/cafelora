import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../Components/Header/Header';
import { Banner } from '../Components/Banner/Banner'; 
import { Menu } from '../Components/Menu/Menu';
import { Gallery } from '../Components/Gallery/Gallery';
import { Contact } from '../Components/Contact/Contact';
import { Footer } from '../Components/Footer/Footer';
import { drinks } from '../Components/Menu/Menu';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
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
const navMenu = document.querySelector('.nav-closed');

navButton.addEventListener('click', () => {
  if (navMenu.classList.contains('nav-closed')) {
      navMenu.classList.remove('nav-closed')
      navMenu.classList.add('rollout-nav')
  }else{
      navMenu.classList.remove('rollout-nav')
      navMenu.classList.add('nav-closed');
  }
})

const navLinks = document.querySelectorAll('.rollout-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('nav-closed');
  });
});

const formsElm = document.querySelectorAll('.drink__controls');
formsElm.forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
   
    const drinkId = Number(e.target.dataset.id)
    const drink = drinks.find((drink) => drink.id === drinkId) 
    const newOrderedState = !drink.ordered
    console.log(drinkId);

    await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        [
          {  
            op: 'replace',
            path: '/ordered', 
            value: newOrderedState
          }
        ]   
      )
    } 
  ) 
  window.location.reload()
  }); 
});

// nefunguje vypsání ID do console, jen při prokliknutí blikne číslo