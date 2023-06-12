import React, { useEffect, useState } from 'react'
import "../../components/Learn/LearnExercise.css"
import HorizontalScrollBar from './HorizontalScrollBar';
import { fetchData, options } from './FetchData';
const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([]);


    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
            setBodyParts(['all', ...bodyPartsData]);
        }
        fetchExerciseData();
    }, []);


    const handleSearch = async () => {

        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);
            const searchExercises = exerciseData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search));
            setSearch('');
            setExercises(searchExercises);
        }
    }
    return (
        <section className='search-exercise' id='search'>
            <div className="container">
                <div className="exercise-title">
                    <h2>
                        Awesome Exercise You Must Know
                    </h2>
                </div>
                <div className="exercise-content">
                    <input type="text" placeholder='Search Exercise' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="scrollbar">
                    <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </div>
            </div>
        </section>
    )
}

export default SearchExercise
