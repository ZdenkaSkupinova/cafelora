import "./drink.css"

const Drink = (props) => {
    const { name, image} = props
    return(
<div className="drink">
<div className="drink__product">
  <div className="drink__cup">
    <img src={image} alt="salek kavy"/>

  </div>
  <div className="drink__info">
    <h3>Espresso{name}</h3>
    <div className="layer">
      <div className="layer__color" style={{ backgroundColor: '#613916' }}></div>
      <div className="layer__label">espresso</div>
    </div>
  </div>
</div>
<form className="drink__controls">
  <input type="hidden" className="order-id" value="0" />
  <button className="order-btn">
    Objednat
  </button>
</form>
</div>

    )
}

// <img src="/cups/espresso.png" />