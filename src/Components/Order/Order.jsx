import { OrderItem } from "../OrderItem/OrderItem";

export const fetchItems = async () => {
    const response = await fetch("http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image")
    const json = await response.json();
    return json.data;
};

const items = await fetchItems();
console.log(items)
const objednavka = items.length
console.log(objednavka)

export const Order = () => (
<main className="order">
    <div className="container order__content">
    <h1>Vaše objedávnka</h1>
    {objednavka === 0 ? (
        <p className="empty-order">Zatím nemáte nic objednáno</p>
        ) : (
        <div className="order__items">  
        {items.map((item) => (  
            <OrderItem 
                key={item.id}
                image={item.image}
                name={item.name}
            />
        ))}  
    </div>
    )}  
    </div>
</main>  

);
