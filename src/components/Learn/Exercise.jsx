import React, { useEffect } from 'react'
import { fetchData, options } from './FetchData';
import ExerciseCard from './ExerciseCard';
const Exercise = ({ exercises, setExercises, bodyPart }) => {
  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);
      }
      else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options);
      }
      setExercises(exerciseData);
    }
    fetchExerciseData();
  }, [bodyPart])
  return (
    <section className='container'>
      <div className='exericses'>
        {
          exercises.slice(0, 9).map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
      </div>
    </section>
  )
}

export default Exercise
