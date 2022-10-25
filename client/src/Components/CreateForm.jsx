import React, {useState, useEffect} from "react";
import { createGame, getGenres,getVideogames } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import s from "./CreateForm.module.css";

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



// Local states
const [input, setInput] = useState({
    name:'',
    description: '',
    image: '',
    released: '',
    rating: '',
    genres: [],
    platforms: []
});
const [error, setError] = useState({});


const platformsList = ['PC', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5', 'Xbox 360', 'Xbox One' ,'Xbox Series S/X', 'Nintendo Switch'];
//const platformsListAUX = ['PC', 'XBOX', 'XBOX 360', 'XBOX ONE', 'XBOX SERIES S/X', 'SEGA DreamCast', 'Nintendo 64', 'Nintendo Gamecube', 'Nintendo Wii', 'Nintendo Wii U', 'Nintendo Switch', 'Nintendo DS', 'Nintendo 3Ds', 'PlayStation', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5' , 'PlayStation Portable', 'PlayStation Vita', 'Android', 'iOS', 'KaiOS', 'Web'];


// Functions
function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    });
    // console.log(input)
    // Como la actualizacion del estado es algo asincrónico lo voy a ver reflejado "tarde" a los cambios
    setError(validate({
        ...input,
        [e.target.name]: e.target.value
    }));
};

function handleSelect(e){
    if(!input.genres.includes(e.target.value)){
        setInput({
            ...input,
            genres: [...input.genres, e.target.value]
        })
        setError(validate({
            ...input,
            genres: [...input.genres, e.target.value]
        }));
    };
};

function handleDeSelect(e){
    setInput({
        ...input,
        genres: input.genres.filter(gen => gen !== e.target.value)
    });
    setError(validate({
        ...input,
        genres: input.genres.filter(gen => gen !== e.target.value)
    }));
};

function handleCheckbox(e){
    if(!input.platforms.includes(e.target.value)){
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        });
        setError(validate({
            ...input,
            platforms: [...input.platforms, e.target.value]
        }));
    }
    else{
        setInput({
            ...input,
            platforms: input.platforms.filter(plat => plat !== e.target.value)
        });
        setError(validate({
            ...input,
            platforms: input.platforms.filter(plat => plat !== e.target.value)
        }));
    }
};

function validate(input){
    let error = {};
    if(!input.name){error.name = 'Please write a name'};
    if(input.name.length > 70){error.name = 'The name is too long'};
    if(gamesList.some(g => g.name.toLowerCase() === input.name.toLowerCase())){error.name = 'The Game already exist'}

    if(input.description.length === 0){error.description = 'Please write a description'};
    if(input.description.length > 0 && input.description.length < 25){error.description = 'The description is too short'};
    if(input.description.length > 1200){error.description = 'The description is too long'};

    if(!input.image){error.image = 'Please insert the link of an image'};

    if(!input.released){error.released = 'Please select a date of released'};
    
    if(!input.rating){error.rating = 'Please rate the game with a score from 1 to 5'}
    else if(input.rating < 1){error.rating = 'The minimum score is 1'};
    if(input.rating.toString().length > 4){error.rating = 'The score can only have 2 decimal places'};
    if(input.rating > 5){error.rating = 'The maximum score is 5'};

    if(!input.genres.length){error.genres = 'Select at least one genre'};

    if(!input.platforms.length){error.platforms = 'Select at least one platform'};
    
    return (error);
};

function handleSubmit(e){
    e.preventDefault();
    if(input.name){
        dispatch(createGame({
            ...input,
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
        alert('Game Created Successfully');
        history.push('/home');
    }
    else{
        alert('Please complete all the cases'); 
    }
};


return(
    <React.Fragment>
        <Link to='/home'><button className={s.homeButton}>Back Home</button></Link>
        <h3>Create Your GAME !</h3>
        <form onSubmit={e=> handleSubmit(e)}>
            <label>Name: </label>
            <input
            type='text'
            value={input.name}
            name='name'
            onChange={e => handleChange(e)}
            />
            {error.name && (<p>{error.name}</p>)}
            <br/>
            <label for='desc'>Description: </label>
            <textarea
            id='desc'
            type='text'
            placeholder='Tell about the history or the mechanics of the game'
            cols='60'
            rows='5'
            maxlength='1210'
            required
            value={input.description}
            name='description'
            onChange={e => handleChange(e)}
            />
            {error.description && (<p>{error.description}</p>)}
            <br/>
            <label>Date of release: </label>
            <input
            type='date'
            value={input.released}
            name='released'
            onChange={e => handleChange(e)}
            />
            {error.released && (<p>{error.released}</p>)}
            <br/>
            <label>Rating: </label>
            <input
            type='number'
            min="1" 
            max="5"
            step="0.01"
            value={input.rating}
            name='rating'
            onChange={e => handleChange(e)}
            />
            {error.rating && (<p>{error.rating}</p>)}
            <br/>
            <label>Image Link: </label>
            <input
            type='text'
            value={input.image}
            name='image'
            onChange={e => handleChange(e)}
            />
            {error.image && (<p>{error.image}</p>)}
            <br/>
            <label>Platforms: </label>
            {platformsList.map((pl => (
                <label>
                    <input key={pl} type='checkbox' name={pl} value={pl} onChange={e => handleCheckbox(e)}/>
                    {pl}
                </label>
            )))}
            <br/>
            {error.platforms && (<p>{error.platforms}</p>)}
            <label>Genres: </label>
            <label> 
            <select onChange={e=> handleSelect(e)} defaultValue={'DEFAULT'}>
                <option value='DEFAULT' disabled>Select a genre</option>
                {genresList.map((el)=>(
                    <option key={el} value={el} name={el}>{el}</option>
                ))}
            </select>
            {error.genres && (<p>{error.genres}</p>)}
            <br/>
            </label>
            {Object.keys(error).length ? 
                (<input type="submit" disabled name="Send" />) 
                :
                (<input type="submit" name="Send" />)
            }
        </form>
        <p>The game genres are:</p>
        <ul>
            {input.genres?.map((gen => (
                <>
                    <li>{gen}</li>
                    <button onClick={e => handleDeSelect(e)} value={gen}>X</button>
                </>
            )))}
        </ul>
        <p>The game platforms are:</p>
        <ul>
            {input.platforms?.map((gen => (
                <li>
                    <span>{gen}</span>
                </li>
            )))}
        </ul>
    </React.Fragment>
)};