import "./layer.css"

export const Layer = ({label, color}) => {
    return(
        <div className="layer">
        <div className="layer__color" style={{ backgroundColor: '#613916' }}>{color}</div>
        <div className="layer__label">{label}</div>
        </div>  
    )
}

