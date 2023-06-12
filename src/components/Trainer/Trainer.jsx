import React from 'react'
import TrainerCard from './TrainerCard'
import "../../components/Trainer/Trainer.css"

const Trainer = () => {
    return (
        <section className='trainer'>
            <div className="container">
                <h2>Our Professional Trainer</h2>
                <div className="trainer-cards">
                    <TrainerCard imgIndex={1} name={"Alex Orton"} desc={"MMA Fighter"} />
                    <TrainerCard imgIndex={2} name={"Harry Jakson"} desc={"GYM Trainer"} />
                    <TrainerCard imgIndex={3} name={"Shane Roy"} desc={"Wrestler"} />
                </div>
            </div>
        </section>
    )
}

export default Trainer
