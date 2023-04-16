import React from 'react'

import './CryptoCard.css'
export const Cryptocard = (props) => {
  return (
    <div>
        <div className="card">
        <div className='card_image'>
                <img src={props.img} alt={name} />
            </div>
            <div className='card_info'>
                <h2>{props.name}</h2>
                <h3>${props.currentPrice}</h3>
            </div>
        </div>
    </div>
  )
}
