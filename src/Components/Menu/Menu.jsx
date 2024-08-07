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
      {drinks.map((drink) => (
        <Drink  
            key={drink.id}
            id={drink.id}
            image={drink.image}
            name={drink.name}
            layers={drink.layers}
            ordered={drink.ordered}
        />
      ))}
    </div>
  </div>
  <div className="order-detail">
    <a href="/order.html">Detail objednávky</a>
  </div>
</section>
  )
}


