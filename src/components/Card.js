import React from 'react'
import './Card.css'


const Card = props => (
    <div className="CardGroup">
        <div className="Card">
            <img src={props.image} />
        </div>
        <div className="CardTitle">
            <p>{props.title}</p>
        </div>
    </div>
)

export default Card
