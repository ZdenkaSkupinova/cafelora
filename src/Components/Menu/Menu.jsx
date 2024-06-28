import "./menu.css"
import { Drink } from "../Drink/Drink"

const response = await fetch("http://localhost:4000/api/drinks")
const json = await response.json()
export const drinks = json.data

console.log(drinks)

export const Menu = () => {
  return (
<section id="menu" className="menu">
<div className="container">
  <h2>Naše nabídka</h2>
  <p className="menu-intro">
    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
  </p>
  <div className="drinks-list">
  {drinks.map((item) => (
    <Drink  
        key={item.name}
        name={item.name}
        image={item.image}
        layers={item.layers}
    />
  ))}


    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src="/cups/doppio.png" />
        </div>
        <div className="drink__info">
          <h3>Doppio</h3>
          <div className="layer">
            <div className="layer__color" style={{ backgroundColor: '#613916' }} />
            <div className="layer__label">espresso</div>
          </div>
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="1" />
        <button className="order-btn">
          Objednat
        </button>
      </form>
    </div>

    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src="/cups/lungo.png" />
        </div>
        <div className="drink__info">
          <h3>Lungo</h3>
          <div className="layer">
            <div className="layer__color" style={{ backgroundColor: '#b0dee1' }} />
            <div className="layer__label">voda</div>
          </div>
          <div className="layer">
            <div className="layer__color" style={{ backgroundColor: '#613916' }} />
            <div className="layer__label">espresso</div>
          </div>
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="2" />
        <button className="order-btn">
          Objednat
        </button>
      </form>
    </div>
  </div>

  <div className="order-detail">
    <a href="/order.html">Detail objednávky</a>
  </div>
</div>
</section>
  )
}

// dvě kávy jako vzor, pak smazat


