import React from 'react'
import './Card.scss'

const Card = ({children}) => {
    return (
        <div className="card mr-1">
            {children}
        </div>
    )
}

export default Card
