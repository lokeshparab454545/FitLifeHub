import React from 'react'
import "../../components/Features/Feature.css"
import FeatureCard from './FeatureCard'
import FeatureGrid from './FeatureGrid'


const Features = () => {
    return (
        <section className='feature'>
            <div className="container">
                <div className="feature-heading">
                    <h2>Create a Body That You Love</h2>
                </div>
                <div className="feature-part">
                    <div className="feature-card">
                        <FeatureCard number={"500"} name={"Videos"} color={"#f2b633"} />
                        <FeatureCard number={"300"} name={"Members"} color={"#7b29dd"} />
                        <FeatureCard number={"100"} name={"Reviews"} color={"#f5a387"} />
                    </div>
                    <div className="feature-img">
                        <img src={"/img/feature-img.png"} alt="" />
                    </div>
                    <div className="feature-grid">
                        <FeatureGrid icon={"ri-run-line"} title={"Outdoor Running"} desc={"Total 7.5 km"} color={"#f2b633"} />
                        <FeatureGrid icon={"ri-heart-pulse-line"} title={"Hit Cardio"} desc={"Total 45 min"} color={"#7b29dd"} />
                        <FeatureGrid icon={"ri-map-pin-2-fill"} title={"Find Nearest Gym"} desc={"20 min away"} color={"#f5a387"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
