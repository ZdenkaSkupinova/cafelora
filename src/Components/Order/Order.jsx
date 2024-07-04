import { OrderItem } from "../OrderItem/OrderItem";
import { fetchItems } from "../OrderItem/OrderItem";

const items = await fetchItems();
console.log(items)

export const Order = ({items}) => (
    <>
    {items ? (
        <div className="order__items">
        {items.map((item) => (  
            <OrderItem 
                id={item.id}
                name={item.name}
                image={items.image}
            />
        ))}   
        </div>
        ) : (
        <p className="empty-order">Zatím nemáte nic objednáno</p>)
    }  
    </>
);

// po kliknuti na button je Zrušit, itemps jsou vypsane v konzoli
