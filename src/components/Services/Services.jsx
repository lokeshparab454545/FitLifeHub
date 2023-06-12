import React from 'react'
import "../../components/Services/Services.css"
import ServicesCard from './ServicesCard'
const Services = () => {
    return (
        <section className='services' id='services'>
            <div className="container">
                <div className="services-title">
                    <h2>Monthly Feature Program</h2>
                </div>
                <div className="services-cards">
                    <ServicesCard index={"1"} desc={"Here how to shrink your belly and thighs with aerobics in 7 days!"} color={"#f2b633"} />
                    <ServicesCard index={"2"} desc={"Without using any tools, you can burn belly fat lying down"} color={"#7b29dd"} />
                    <ServicesCard index={"3"} desc={"Here you will be fit in such a way that your body is free from harmful aspects"} color={"#f5a387"} />
                </div>
            </div>
        </section >
    )
}

export default Services
