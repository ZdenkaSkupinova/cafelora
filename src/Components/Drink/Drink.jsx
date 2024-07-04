import "./drink.css"
import { Layer } from "../Layer/Layer"

export const Drink = ({id, name, image, layers, ordered}) => (
<div className="drink">
<div className="drink__product">
  <div className="drink__cup">
  <img src={`http://localhost:4000${image}`} alt="šálek kávy"/>
  </div>
  <div className="drink__info">
    <h3>{name}</h3>
    {layers.map((layer) => (
      <Layer 
          key={layer.label}
          color={layer.color}
          label={layer.label}
      />
    ))}  
  </div>
</div>
<form className="drink__controls" data-id={id}>
      <input type="hidden" className="order-id" value={id} />
      <button type="submit" className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}>
        {ordered ? 'Zrušit' : 'Objednat'}
      </button>
    </form>
</div>
)

//  {ordered ? 'Zrušit' : 'Objednat'} tady bych nechala Objednat a Zrušit na buttonu jako text kontent



