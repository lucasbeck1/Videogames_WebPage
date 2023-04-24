import React, {useState, useEffect} from "react";
import { createGame, getGenres, getVideogames } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {Game} from "./Game";
import defaultImage from "../assets/gamer-1.png";
import s from "./styles/CreateForm.module.css";


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
//const platformsListAUX = ['PC', 'XBOX', 'XBOX 360', 'XBOX ONE', 'XBOX SERIES S/X', 'SEGA DreamCast', 'Nintendo 64', 'Nintendo Gamecube', 'Nintendo Wii', 'Nintendo Wii U', 'Nintendo Switch', 'Nintendo DS', 'Nintendo 2Ds', 'Nintendo 3Ds', 'PlayStation', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5' , 'PlayStation Portable', 'PlayStation Vita', 'Android', 'iOS', 'KaiOS', 'Web', 'Sega Genesis'];


// Functions
function handleChange(e){
  setInput({
    ...input,
    [e.target.name]: e.target.value
  });
  setError(validate({
    ...input,
    [e.target.name]: e.target.value
  }));
};

function handleSelect(e){
  if(!input.genres.includes(e.target.value)){
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    })
    setError(validate({
      ...input,
      genres: [...input.genres, e.target.value]
    }));
  };
  document.getElementById('SelectGenres').selectedIndex = 'DEFAULT';
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
  let RegEXP = /[`ª!@#$%^'*_+\=\[\]{};"\\|,<>\/~]/;
  
  if(!input.name){error.name = 'Please write a name'}
  else if (RegEXP.test(input.name)) {error.name = "Special characters are not accepted"}
  else if(input.name.length > 70){error.name = 'The name is too long'}
  else if(gamesList.some(g => g.name.toLowerCase() === input.name.toLowerCase())){error.name = 'The Game already exist'}

  else if(input.description.length === 0){error.description = 'Please write a description'}
  else if(input.description.length > 0 && input.description.length < 25){error.description = 'The description is too short'}
  else if(input.description.length > 1200){error.description = 'The description is too long'}
  else if (RegEXP.test(input.description)) {error.description = "Special characters are not accepted"}

  else if(!input.released){error.released = 'Please select a date of released'}

  else if(!input.rating){error.rating = 'Please rate the game with a score from 1 to 5'}
  else if(input.rating < 1){error.rating = 'The minimum score is 1'}
  else if(input.rating.toString().length > 4){error.rating = 'The score can only have 2 decimal places'}
  else if(input.rating > 5){error.rating = 'The maximum score is 5'}

  else if(!input.image){error.image = 'Please insert the image link'}
  else if(input.image.slice(0,4) !== 'http') {error.image = 'Invalid direction link, it must start with "http"'}
  else if(
    input.image.slice(-3) !== 'bmp' &&
    input.image.slice(-3) !== 'jpg' &&
    input.image.slice(-4) !== 'jpeg' &&
    input.image.slice(-3) !== 'jpg' &&
    input.image.slice(-3) !== 'tif' &&
    input.image.slice(-4) !== 'tiff' &&
    input.image.slice(-3) !== 'png' &&
    input.image.slice(-3) !== 'svg'
  ) {error.image = 'This link is not a valid image'}
  

  else if(!input.genres.length){error.genres = 'Select at least one genre'}

  else if(!input.platforms.length){error.platforms = 'Select at least one platform'}

  return (error);
};

function handleSubmit(e){
  e.preventDefault();
  if(input.name){
    dispatch(createGame({
      ...input,
      platforms: input.platforms.join(', '),
      rating: Number(input.rating)
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
    alert('Game Created Successfully, redirecting to home');
    history.push('/home');
  }
  else{
    alert('Please complete all the cases');
  }
};


  return(
  <React.Fragment>
  <Link to={`/home`} className={s.link} style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <p className={s.homeButton}>Home</p>
  </Link>
  <h3>Create Your GAME !</h3>

  <div className={s.form}>
    <form onSubmit={e=> handleSubmit(e)}>
    <p>Name: </p>
    <input
    type='text'
    value={input.name}
    name='name'
    placeholder='Game Name'
    maxLength='100'
    onChange={e => handleChange(e)}
    className={s.inputs1}
    />
    {error.name? (<p className={s.error}>{error.name}</p>) :
    (<div>
        <br/>
        <br/>
    </div>)}

    <p htmlFor='desc'>Description: </p>
    <textarea
    id='desc'
    type='text'
    placeholder='Write about the history and the mechanics of the game'
    cols='60'
    rows='5'
    maxLength='1210'
    /* required */ /* Validación Html */
    value={input.description}
    name='description'
    onChange={e => handleChange(e)}
    className={s.inputs1}
    />
    {error.description ? (<p className={s.error}>{error.description}</p>) :
    (<div>
        <br/>
        <br/>
    </div>)}

    <p>Date of release: </p>
    <input
    type='date'
    value={input.released}
    name='released'
    onChange={e => handleChange(e)}
    className={s.inputs1}
    />
    {error.released ? (<p className={s.error}>{error.released}</p>) :
    (<div>
        <br/>
        <br/>
    </div>)}

    <p>Rate it: </p>
    <input
    type='range'
    min="1"
    max="5"
    step="1"
    value={input.rating}
    name='rating'
    placeholder='From 1 to 5'
    onChange={e => handleChange(e)}
    className={s.inputs1}
    />
    {/* <input
    type='number'
    min="1"
    max="5"
    step="0.01"
    value={input.rating}
    name='rating'
    placeholder='From 1 to 5'
    onChange={e => handleChange(e)}
    className={s.inputs1}
    /> */}
    {error.rating ? (<p className={s.error}>{error.rating}</p>) :
      (input.rating ?
      (<p>{input.rating}</p>)  :
      (<div>
        <br/>
        <br/>
      </div>))
    }

    <p>Image Link: </p>
    <input
    type='url'
    value={input.image}
    name='image'
    placeholder='http://www...'
    onChange={e => handleChange(e)}
    className={s.inputs1}
    />

    {error.image ? (<p className={s.error}>{error.image}</p>) :
    (<div>
      <br/>
      <br/>
    </div>)}

    <p>Genres: </p>
    {
    <select id='SelectGenres' onChange={e=> handleSelect(e)} defaultValue={'DEFAULT'}>
        <option value='DEFAULT' disabled>Select a genre</option>
        {genresList.map((el)=>(
            <option key={`${el}1`} value={el} name={el}>{el}</option>
        ))}
    </select>
    }

    {error.genres ? (<p className={s.error}>{error.genres}</p>) :
    (<div>
      <br/>
      <br/>
    </div>)}

    {
    <div className={s.listGenres}>
    {genresList.map((gen => (

      input.genres.includes(gen) ?
      (<div key={`${gen}2`}>
        <button onClick={e => handleDeSelect(e)} value={gen} className={s.genreSelected} type="button">{gen}</button>
      </div>)
        :
      (<div key={`${gen}3`}>
        <button disabled onClick={e => handleDeSelect(e)} value={gen} className={s.genreUnselected}>{gen}</button>
      </div>)

    )))}
    </div>
    }


    <p>Platforms: </p>
    <div className={s.listPlatformsDad}>
    <div className={s.listPlatforms}>
      {platformsList.map((pl => {return(
      <React.Fragment key={pl}>
        {input.platforms.includes(pl) ? (
        <label className={s.selectedPlatform}>
        <input type='checkbox' name={pl} value={pl} onChange={e => handleCheckbox(e)} />
          {pl}
        </label>
        ) : (
        <label className={s.unSelectedPlatform}>
        <input type='checkbox' name={pl} value={pl} onChange={e => handleCheckbox(e)} />
          {pl}
        </label>
        )}
      </React.Fragment>
      )}))}
    </div>
    </div>
    {error.platforms ? (<p className={s.error}>{error.platforms}</p>) :
    (<div>
      <br/>
      <br/>
    </div>)}

    {Object.keys(error).length || !input.name.length ?
      (<input type="submit" disabled name="Send" className={s.submittButton2}/>)
      :
      (<input type="submit" name="Send" className={s.submittButton1}/>)
    }
    </form>
    </div>


    <div className={s.gamePreview}>
      <Game
        game={{
          name: input.name? (input.name) : ("YOUR GAME"),
          img: input.image? (input.image) : (defaultImage),
          genres: input.genres.length > 0? (input.genres.join(', ')) : ('Genres'),
          id: "NO ID"
        }}
        
      ></Game>
    </div>

  </React.Fragment>
  )
};
