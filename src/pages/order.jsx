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
      <Header showMenu={false}/>
      <Order />  
      <Footer />
    </div>
  </div>
);

