import React, {Component, useState, useEffect} from "react";
import { createGame, getGenres,getVideogames } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";


export function CreateForm (){

// Global States
const dispatch = useDispatch();
const genresList = useSelector(state => state.genres);
const gamesList = useSelector(state => state.videogamesListCOMPLETE);
const history = useHistory();


useEffect(()=>{
    dispatch(getVideogames())
    dispatch(getGenres())
},[dispatch]);


// Local state
const [input, setInput] = useState({
    name:'',
    description: '',
    image: '',
    released: '',
    rating: '',
    genres: [],
    platforms: []
});

const platformsList = ['PC', 'XBOX', 'XBOX 360', 'XBOX ONE', 'XBOX SERIES S/X', 'SEGA DreamCast', 'Nintendo 64', 'Nintendo Gamecube', 'Nintendo Wii', 'Nintendo Wii U', 'Nintendo Switch', 'Nintendo DS', 'Nintendo 3Ds', 'PlayStation', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5' , 'PlayStation Portable', 'PlayStation Vita', 'Android', 'iOS', 'KaiOS', 'Web']


// Functions
function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    });
    // console.log(input)
    // Como la actualizacion del estado es algo asincrónico lo voy a ver reflejado "tarde" a los cambios
};

function handleSelect(e){
    if(!input.genres.includes(e.target.value)){
        setInput({
            ...input,
            genres: [...input.genres, e.target.value]
        })
    };
};

function handleDeSelect(e){
    setInput({
        ...input,
        genres: input.genres.filter(gen => gen !== e.target.value)
    })
};

function handleCheckbox(e){
    if(!input.platforms.includes(e.target.value)){
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        })
    }
    else{
        setInput({
            ...input,
            platforms: input.platforms.filter(plat => plat !== e.target.value)
        })
    }
};

function handleSubmit(e){
    e.preventDefault();
    if(gamesList.includes(input.name)){
        dispatch(createGame({
            ...input,
            genres: input.genres.join(', '),
            platforms: input.platforms.join(', ')
            }
        ));
        setInput({
            name:'',
            description: '',
            image: '',
            released: '',
            rating: '',
            genres: [],
            platforms: []
        });
        alert('Game Sucesfully Created');
        history.push('/home');
    }
    else {
        alert('The Game already exist');
    }
};


return(
    <React.Fragment>
        <h3>Create Your GAME !</h3>
        <form onSubmit={e=> handleSubmit(e)}>
            <label>Name: </label>
            <input
            type='text'
            value={input.name}
            name='name'
            onChange={e => handleChange(e)}
            />
            <br/>
            <label>Description: </label>
            <input
            type='text'
            value={input.description}
            name='description'
            onChange={e => handleChange(e)}
            />
            <br/>
            <label>Date of release: </label>
            <input
            type='date'
            value={input.released}
            name='released'
            onChange={e => handleChange(e)}
            />
            <br/>
            <label>Rating: </label>
            <input
            type='text'
            value={input.rating}
            name='rating'
            onChange={e => handleChange(e)}
            />
            <br/>
            <label>Image Link: </label>
            <input
            type='text'
            value={input.image}
            name='image'
            onChange={e => handleChange(e)}
            />
            <br/>
            <label>Platforms: </label>
            {platformsList.map((pl => (
                <label>
                    <input type='checkbox' name={pl} value={pl} onChange={e => handleCheckbox(e)}/>
                    {pl}
                </label>
            )))}
            <br/>
            <label>Genres: </label>
            <label> 
            <select onChange={e=> handleSelect(e)} defaultValue={'DEFAULT'}>
                <option value='DEFAULT' disabled>Select a genre</option>
                {genresList.map((el)=>(
                    <option value={el} name={el}>{el}</option>
                ))}
            </select>
            <br/>
            </label>
            <button type='submit'>Create</button>
        </form>
        <p>The game genres are:</p>
        <ul>
            {input.genres.map((gen => (
                <>
                    <li>{gen}</li>
                    <button onClick={e => handleDeSelect(e)} value={gen}>X</button>
                </>
            )))}
        </ul>
        <p>The game platforms are:</p>
        <ul>
            {input.platforms.map((gen => (
                <li>
                    <span>{gen}</span>
                </li>
            )))}
        </ul>
    </React.Fragment>
)};