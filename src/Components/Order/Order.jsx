import { OrderItem } from "../OrderItem/OrderItem";
/*
const fetchItems = async () => {
    const response = await fetch("http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image")
    const json = await response.json();
    return json.data;
};

const items = await fetchItems();
console.log(items)
*/
export const Order = ({items}) => (
<main className="order">
    <div className="container order__content">
    <h1>Vaše objedávnka</h1>
    {items !== null ? (
        <div className="order__items">
        {items.map((item) => (  
            <OrderItem 
                key={item.id}
                name={item.name}
                image={items.image}
            />
        ))}   
    </div>
    ) : (
    <p className="empty-order">Zatím nemáte nic objednáno</p>)
    }  
    </div>
</main>   
);

// po kliknuti na button je Zrušit, items jsou vypsane v konzoli, ale map je undefined
