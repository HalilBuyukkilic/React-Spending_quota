import React from 'react'
import { moneyFormat } from "../helpers";
function Header({ total, money }) {
    return (
        <div className='header'>
            {
                total > 0 && money - total !== 0 && (
                    <div className='headerCont'> Harcayacak <span>$ {moneyFormat(money - total)}</span> paranız kaldı !</div>
                )
            }

            {
                total === 0 && (
                    <div className='headerCont'> Harcamak için <span>$ {moneyFormat(money - total)}</span> paranız var !</div>
                )
            }

            {
                money - total === 0 && (
                    <div className='headerCont'> Paranız bitti,parasız insan boş insandır!</div>
                )
            }

        </div>
    )
}

export default Header