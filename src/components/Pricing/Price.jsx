import React from 'react'
import PriceCards from './PriceCards'
import "../../components/Pricing/Price.css"
const Price = () => {
    return (
        <section className='price' id='price'>
            <div className="container">
                <div className="price-title">
                    <h2>Exclusive Fitness Plans</h2>
                </div>
                <div className="price-cards">
                    <PriceCards name={"Basics"} price={"Rs. 200/Month"} isWorkOutProgram={true} isPersonalTraining={false} isHoodies={false} ></PriceCards>
                    <PriceCards name={"Essential"} price={"Rs. 400/Month"} isWorkOutProgram={true} isPersonalTraining={true} isHoodies={false} ></PriceCards>
                    <PriceCards name={"Premium"} price={"Rs. 600/Month"} isWorkOutProgram={true} isPersonalTraining={true} isHoodies={true} ></PriceCards>
                </div>
            </div>
        </section>
    )
}

export default Price
