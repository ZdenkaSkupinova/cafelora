import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import { Order } from '../Components/Order/Order';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header />
        <main className="order">
          <div className="container order__content">
            <h1>Vaše objedávnka</h1>
            <Order />  
          </div>
        </main>     
      <Footer />
    </div>
  </div>
);

