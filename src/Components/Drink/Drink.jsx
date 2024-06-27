import "./drink.css"

export const Drink = ({id, name, image, layer, color, label, ordered}) => {
    return(
<div className="drink">{id}
<div className="drink__product">
  <div className="drink__cup">
    <img src={image} alt="salek kavy"/>

  </div>
  <div className="drink__info">
    <h3>{name}</h3>
    <div className="layer">{layer}
      <div className="layer__color" style={{ backgroundColor: '#613916' }}>{color}</div>
      <div className="layer__label">espresso{label}</div>
    </div>
  </div>
</div>
<form className="drink__controls">
  <input type="hidden" className="order-id" value="0" />
  {{ordered} ?    
  <button className="order-btn">Objednat</button> : false} 
</form>
</div>
    )
}

// jiná cesta, bude API = <img src="/cups/espresso.png" />

/*
id={0}
ordered={false}
name={name}
image={"http://localhost:4000/assets/{image}"}
const {color, label} = layers

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