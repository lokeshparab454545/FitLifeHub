import React from 'react'
import "../../components/Services/Services.css"
const ServicesCard = ({ index, desc, color }) => {
    return (
        <div className='ser-card'  data-aos="fade-up" data-aos-duration="500" style={
            { backgroundColor: color }
        }>
            <div className='services-logo'>
                <img src={`/img/feature-${index}.png`}
                    alt="services-logo" />
            </div>
            <div className='services-content'>
                <p>{desc}</p>
                <div className="services-learn">
                    <p>Learn More</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard
