import { useState } from 'react'
import './Exercises.css'

const Exercises = () => {

    const [exercise, setExercise] = useState('')
    const [sets, setSets] = useState()
    const [reps, setReps] = useState()
    const [weight, setWeight] = useState()

    const exerciseData = {
        exercise: exercise,
        sets: Number(sets),
        reps: Number(reps),
        weight: Number(weight)
    }

    return (
        <div className='exercise'>
            <h1>Exercises</h1>
            <p>Add an exercise</p>

            <form className='exercise-info'>

                <div className='exercise-name-box'>
                    <img className='exercise-icon' src='/assets/svg-icons/exercise.svg' alt='exercise' />
                    <input
                        className='exercise-details-edit'
                        type="text"
                        placeholder="Exercise"
                        value={exercise}
                        onChange={(e) => {
                            setExercise(e.target.value)
                        }}
                    />
                </div>

                <div className='exercise-box'>
                    <div className='exercise-details-box'>
                        <input
                            className='exercise-details-edit'
                            type="text"
                            placeholder="Sets"
                            value={sets}
                            onChange={(e) => {
                                setSets(e.target.value)
                            }}
                        />
                    </div>

                    <div className='exercise-details-box'>
                        <input
                            className='exercise-details-edit'
                            type="text"
                            placeholder="Reps"
                            value={reps}
                            onChange={(e) => {
                                setReps(e.target.value)
                            }}
                        />
                    </div>

                    <div className='exercise-details-box'>
                        <input
                            className='exercise-details-edit'
                            type="text"
                            placeholder="Weight"
                            value={weight}
                            onChange={(e) => {
                                setWeight(e.target.value)
                            }}
                        />
                    </div>
                </div>

                <div className='buttons'>
                    <button
                        className='btn'
                        onClick={(e) => {
                            e.preventDefault()
                            console.log(exerciseData);
                        }}
                    >
                        Add
                    </button>
                    <button
                        className='btn'
                        onClick={(e) => {
                            e.preventDefault()
                            console.log(exerciseData);
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>




        </div>
    )
}

export default Exercises