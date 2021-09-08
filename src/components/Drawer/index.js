import React from 'react';
import axios from 'axios';

import { useCart } from '../../hooks/useCart';
import Info from "../Info";

import styles from './Card.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


export default function Drawer({onClose,opened, onRemove, items=[]}) {
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const [orderId, setOrderId] = React.useState(null);
    const { cartItems, setCartItems, totalPrice} = useCart();


    const onClickOrder = async () => {
        setIsLoading(true);
        const {data} = await axios.post('https://611df8af7d273a0017e2f990.mockapi.io/orders', {items:cartItems});
        setOrderId(data.id)
        setIsOrderComplete(true)
        setCartItems([]);
        // for (let index = 1; index < cartItems.length+1; index++) {
        //     console.log(cartItems[index]);

        //     await axios.delete(`https://611df8af7d273a0017e2f990.mockapi.io/cart/` + index)
        //     await delay(1000);
        // }
        // cartItems.forEach((item) => {
        //     console.log(item, item.id);
        //     axios.delete(`https://611df8af7d273a0017e2f990.mockapi.io/cart/` + item.id)
            
        //     delay(1000);
        // });

        try {
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://611df8af7d273a0017e2f990.mockapi.io/cart/' + item.id);
                await delay(1000);
              }
        
        } catch (error) {
            alert('Не удалось создать заказ')
        }
        setIsLoading(false)
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisibility : ''}`}>
            <div className={`${styles.drawer}`}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img
                        onClick={onClose}
                        className="removeBtn cu-p"
                        src="/img/btn-remove.svg"
                        alt="Remove"
                    />
                </h2>
                {items.length > 0 ? (
                    <div className='d-flex flex-column flex'>
                        <div className="items">
                            {items.map(({ id, title, price, imageUrl }) => (
                                <div key={id} className="cartItem d-flex align-center mb-20">
                                    <div
                                        style={{
                                            backgroundImage: `url(${imageUrl})`,
                                        }}
                                        className="cartItemImg"
                                    ></div>

                                    <div className="mr-20 flex">
                                        <p className="mb-5">{title}</p>
                                        <b>{price} руб.</b>
                                    </div>
                                    <div>
                                        <img
                                            onClick={() => onRemove(id)}
                                            className="removeBtn"
                                            src="/img/btn-remove.svg"
                                            alt="Remove"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b> {totalPrice/100*5} руб.</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                                Оформить заказ{" "}
                                <img src="img/arrow.svg" alt="arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info 
                        image={isOrderComplete ? 'img/order-complete.jpg' :'img/empty-cart.jpg'} 
                        title={isOrderComplete? 'Заказ оформлен!':'Корзина пустая'} 
                        description = {isOrderComplete? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'} />
                )}
            </div>
        </div>
    );
}
