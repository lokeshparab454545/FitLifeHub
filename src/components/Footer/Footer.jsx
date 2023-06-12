import React from 'react'
import "../../components/Footer/Footer.css"
const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="col">
                        <h1>FitLifeHub</h1>
                        <p>
                            Welcome to our fitness website! We are dedicated to helping individuals achieve their health and goals through fitness videos. Our mission is to inspire people to live a fit and active lifestyle, making fitness accessible and enjoyable for everyone.
                        </p>
                    </div>
                    <div className="col" id='footer-service'>
                        <h3>About</h3>
                        <p>Features</p>
                        <p>Learn</p>
                        <p>Services</p>
                        <p>Price</p>
                    </div>
                    <div className="col">
                        <h2>Install App</h2>
                        <p>From App Store or Google Pay</p>
                        <div className="row">
                            <img src="/img/app.jpg" alt="" />
                            <img src="/img/play.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
