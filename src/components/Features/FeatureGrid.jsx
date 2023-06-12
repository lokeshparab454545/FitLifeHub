import React from 'react'
import "../../components/Features/Feature.css"

const FeatureGrid = ({ icon, title, desc, color }) => {
    return (
        <div className='grid' data-aos="flip-up" data-aos-duration="400">
            <i class={icon} style={
                { backgroundColor: color }
            }></i>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default FeatureGrid
