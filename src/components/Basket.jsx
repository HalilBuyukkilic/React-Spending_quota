import React from 'react'
import BasketItem from './BasketItem'
import { moneyFormat } from "../helpers";
function Basket({ products, basket, setBasket, total }) {
    const resetBasket = () => {
        setBasket([]);
    }
    return (
        <>
            <div className='basket-container container'>
                <ul>
                    {basket.map(item => (
                        <BasketItem item={item} product={products.find(p => p.id === item.id)} />
                    ))}
                </ul>
                <div className='total'>
                    Toplam: ${moneyFormat(total)}
                </div>
                <button className='resetBasket' onClick={resetBasket}>Sepeti Sıfırla</button>
            </div>
        </>
    )
}

export default Basket