import React from 'react'
import PriceFeatures from './PriceFeatures'
import Button from '../utils/Button'

const PriceCards = ({name, price, isWorkOutProgram, isPersonalTraining, isHoodies}) => {
    return (
        <div className='price-card'>
            <h3>{name}</h3>
            <h2>{price}</h2>
            <div className="price-features">
                <PriceFeatures isCheck={isWorkOutProgram} desc={"Workout Program"}/>
                <PriceFeatures isCheck={isPersonalTraining} desc={"Personal Training"}/>
                <PriceFeatures isCheck={isHoodies} desc={"Hoodies"}/>
            </div>
            <Button name={"Join now"}/>
        </div>
    )
}

export default PriceCards
