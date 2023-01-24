import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames, orders, getGenres, filters } from "../Redux/actions";
import s from "./FilterBar.module.css";

export function FilterBar ({setCurrentPage}){

// Global states
const dispatch = useDispatch();
const allgenres = useSelector(state => state.genres);


useEffect(()=>{
    dispatch(getGenres())
    dispatch(getVideogames())
},[dispatch]);


// Local states (Order)
const [order, setOrder] = useState('NO Order');


// Button Functions
function handleClean(e){
    e.preventDefault();
    dispatch(getVideogames());
    setCurrentPage(1);
};


function orderG(e){
    e.preventDefault();
    dispatch(orders(e.target.value));
    setCurrentPage(1);
    document.getElementById('name').selectedIndex = 'DEFAULT';
    document.getElementById('rating').selectedIndex = 'DEFAULT';
};

function filterG(e){
    e.preventDefault();
    dispatch(filters(e.target.value));
    setCurrentPage(1);
    document.getElementById('storage').selectedIndex = 'DEFAULT';
    document.getElementById('genre').selectedIndex = 'DEFAULT';
};


return(
    <React.Fragment>
            <div className={s.nav}>
                <button onClick={e => handleClean(e)}>Clean</button>
                <h4>Filters</h4>
                <label htmlFor='storage'>Storage</label>
                <select id='storage' onChange={(e) => filterG(e)} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled>Storage</option>
                    <option value='All'>All</option>
                    <option value='Api'>Api</option>
                    <option value='Db'>Library</option>
                </select>
                <label htmlFor='genre'>Genre</label>
                <select id='genre' onChange={(e) => filterG(e)} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled>Genre</option>
                    <option value='All'>All</option>
                    {allgenres?.map(element => {
                    return(<option value={element} key={element}>{element}</option>) 
                    })}
                </select>
                <h4>Order by</h4>
                <label htmlFor='name'>Name</label>
                <select id='name' onChange={(e) => orderG(e)} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled>Alphabetical</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
                <label htmlFor='rating'>Rating</label>
                <select id='rating' onChange={(e) => orderG(e)} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled>Rating</option>
                    <option value='Low Rating'>Low Rating</option>
                    <option value='High Rating'>High Rating</option>
                </select>
                {/*
                <select onChange={(e) => orderG(e)} defaultValue={'DEFAULT'}>
                <option value='DEFAULT' disabled>Select a order</option>
                <optgroup label="Order by Name">
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                </optgroup>
                <optgroup label="Order by Rating">
                <option value='High Rating'>High Rating</option>
                <option value='Low Rating'>Low Rating</option>
                </optgroup>
                </select>
                */}
            </div>

    </React.Fragment>
)};

