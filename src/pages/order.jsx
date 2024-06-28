import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
    <header>
        <div className="container header__content">
          <div className="site-logo"></div>

          <nav className="inline-nav">
            <a href="/">Hlavní stránka</a>
          </nav>

        </div>
      </header>
      <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          <p className="empty-order">Zatím nemáte nic objednáno</p>
          <div className="order__items">
            <div className="order-item">
              <img
                src="/cups/espresso.png"
                className="order-item__image"
              />
              <div className="order-item__name">
                Espresso
              </div>
            </div>

            <div className="order-item">
              <img
                src="/cups/doppio.png"
                className="order-item__image"
              />
              <div className="order-item__name">
                Doppio
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
);

/*
      <Header/>

      <header>
        <div className="container header__content">
          <div className="site-logo"></div>

          <nav className="inline-nav">
            <a href="/">Hlavní stránka</a>
          </nav>

        </div>
      </header>
*/