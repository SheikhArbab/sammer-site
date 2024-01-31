import React from 'react'
import cs from './Card.module.css'

const Card = () => {
    return (
        <div className={cs.myCard}>
            <div className={cs.innerCard}>
                <div className={cs.frontSide}>
                    <p className={cs.title}>FRONT SIDE</p>
                    <p>Hover Me</p>
                </div>
                <div className={cs.backSide}>
                    <p className={cs.title}>BACK SIDE</p>
                    <p>Leave Me</p>
                </div>
            </div>
        </div>

    )
}

export default Card
