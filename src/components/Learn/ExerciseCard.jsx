import React from 'react'
import Exercise from './Exercise'

const ExerciseCard = ({ exercise }) => {
    return (
        <div className='exercise-card'>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <h3>{exercise.name}</h3>
        </div>
    )
}

export default ExerciseCard
