import React from 'react'

const TrainerCard = ({ imgIndex, name, desc }) => {
    return (
        <div className='trainer-card' data-aos="zoom-in" data-aos-duration="500">
            <img src={`/img/trainer-${imgIndex}.png`} alt="trainer-card" />
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default TrainerCard
