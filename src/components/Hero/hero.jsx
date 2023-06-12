import React from 'react'
import "../../components/Hero/hero.css"

import Button from '../utils/Button'
const Hero = () => {
    return (
        <section className='hero'>
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-content " >
                        <div className="hero-title" data-aos="fade-up" data-aos-duration="600" >
                            <h2>Unlock Your Potential</h2>
                            <h2><span>Embrace</span> the Burn</h2>
                            <p>The journey to a healthier you is about transforming your mindset and unleashing your full potential.
                                So, lace up your shoes, put on your game face, and give it everything you've got.</p>
                        </div>
                        <div className="hero-btn" data-aos="fade-up" data-aos-delay="200" >
                            <Button name={"Start Now"} />
                        </div>
                    </div>
                    <div className="hero-img" data-aos="fade-up" data-aos-duration="400">
                        <img src={"/img/hero.jpg"} alt="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
