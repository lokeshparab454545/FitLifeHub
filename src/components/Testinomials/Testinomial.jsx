import React from 'react'
import TestinomialCard from './TestinomialCard'
import "../../components/Testinomials/Testinomial.css"
const Testinomial = () => {
  return (
    <section className='testinomails'>
      <div className="container">
        <h2>What our Clients Say</h2>
        <div className="reviews-card">
          <TestinomialCard is1star={true} is2star={true} is3Star={true} is4Star={true} is5Star={false} review={"This fitness app is a game-changer! It has completely transformed my workout routine and helped me achieve my fitness goals faster than I ever thought possible"} name={"Aman Gupta"} desc={"Founder of BoAt"} />
          <TestinomialCard is1star={true} is2star={true} is3Star={true} is4Star={true} is5Star={true} review={"I've tried numerous fitness apps in the past, but this one stands head above the rest. The exercise library is with detailed videos for each movement. It's like having a personal trainer in my pocket! "} name={"Vineeta Singh"} desc={"Founder of Sugar"} />
          <TestinomialCard is1star={true} is2star={true} is3Star={true} is4Star={true} is5Star={false} review={"If you're serious about fitness, you need this app. It's a comprehensive tool that covers all aspects of a healthy lifestyle. "} name={"Peyush Bansal"} desc={"Founder of LensKart"} />
        </div>
      </div>
    </section>
  )
}

export default Testinomial
