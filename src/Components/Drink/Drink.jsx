import "./drink.css"
import { Layer } from "../Layer/Layer"

export const Drink = ({id, name, image, layers, ordered}) => {
    return(
<div className="drink">
<div className="drink__product">
  <div className="drink__cup">
  <img src={`http://localhost:4000${image}`} alt="šálek kávy"/>
  </div>
  <div className="drink__info">
    <h3>{name}</h3>
    {layers.map((item) => (
      <Layer 
          key={item.label}
          color={item.color}
          label={item.label}
      />
    ))}  
  </div>
</div>
<form className="drink__controls">{id}
  <input type="hidden" className="order-id" value="0" />
  {{ordered} ? (
    <button className="order-btn">Objednat</button>
   ) : (
    <button className="delete-btn">Zrušit</button>
    )   
  } 
</form>
</div>
    )
}

/*
<Drink
  id={0}
  name="Romano"
  ordered={false}
  image="http://localhost:4000/assets/cups/romano.png"
  layers={[
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ]}
/>
 */

