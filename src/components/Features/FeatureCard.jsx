import React from 'react'
import "../../components/Features/Feature.css"

const FeatureCard = ({ number, name, color }) => {
    return (
        <div className='card' data-aos="flip-up" data-aos-duration="400" style={
            { backgroundColor: color }
        }>
            <h3>{number}+</h3>
            <p>{name}</p>
        </div>
    )
}

export default FeatureCard
