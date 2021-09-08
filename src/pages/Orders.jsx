import axios from "axios";
import React from "react";
import Card from "../components/Card";

function Orders() {
    const [ orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);


    React.useEffect(() => {
        (async() =>{
            try {
                const { data } = await axios.get('https://611df8af7d273a0017e2f990.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items],[]));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при отправке заказов');
                console.error(error);
            }
        })()
    }, [])

    return (
        <div className='content p-40'>
            <div className='d-flex align-center mb-40 justify-between'>
                <h1>Мои заказы</h1>
                
            </div>
            
            <div className='card-wrapper d-flex flex-wrap'>
                {(isLoading ? [...Array(12)] : orders).map((obj, index) => (
                    <Card 
                        key={index}
                        isLoading = {isLoading}
                        {...obj}
                    />
                ))}
            </div>

        </div>
    )
}

export default Orders;