export const fetchItems = async () => {
    const response = await fetch("http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image")
    const json = await response.json();
    return json.data;
};


export const OrderItem = ({name, image}) => (
    <div className="order-item">key={id}
      <img src={`http://localhost:4000${image}`} alt={name} className="order-item__image"/>
      <div className="order-item__name">{name}</div>
    </div>    
  );