import React,{useState, useEffect} from 'react';
import axiosAuth from '../utils/PrivateRoute';
import './Jokes.scss';

function Jokes(){
    const [jokes, setJokes] = useState([])

    useEffect(()=>{
        axiosAuth().get('http://localhost:3300/api/jokes')
        .then(res => {
            setJokes(res.data)
        })
        .catch(err => {
            alert(err.message)
        })
    }, [])


    return (
        <div className='jokes'>
            {jokes.map(joke => (
                <div className='joke'>
                    <h2>{joke.joke}</h2>
                </div>
            ))}
        </div>
    )
}

export default Jokes; 