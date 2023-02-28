import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames, orders, getGenres, filters } from "../Redux/actions";
import s from "./styles/FilterBar.module.css";

export function FilterBar ({setCurrentPage, setGamesPerPage}){

  // Global states
  const dispatch = useDispatch();
  const allgenres = useSelector(state => state.genres);
  
  
  useEffect(()=>{
    dispatch(getGenres())
    dispatch(getVideogames())
  },[dispatch]);
  
  
  // Local states
  let dynamicFilter = (true);
  const [showMenu, setShowMenu] = useState(false);
  
  
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
  
  function sizePage(e){
    e.preventDefault();
    setCurrentPage(1);
    setGamesPerPage(parseInt(e.target.value));
    document.getElementById('size').selectedIndex = 'DEFAULT';
  };
  
  function changeShowMenu(e){
    e.preventDefault();
    if(showMenu){
      setShowMenu(false);
    }else{
      setShowMenu(true);
    };
  };
  
  
  if(window.screen.availWidth <= 520){
    dynamicFilter = (false);
  };


  return(
  <React.Fragment>
  
  {dynamicFilter ? (
  <div className={s.nav}>
    <button onClick={e => handleClean(e)} className={s.btn}>Clear</button>
    <h4>Filters</h4>
    <label htmlFor='storage'>Storage</label>
    <select id='storage' onChange={(e) => filterG(e)} defaultValue={'DEFAULT'} className={s.select}>
      <option value='DEFAULT' disabled>Storage</option>
      <option value='All'>All</option>
      <option value='Api'>Library</option>
      <option value='Db'>Added</option>
    </select>
    <label htmlFor='genre'>Genres</label>
    <select id='genre' onChange={(e) => filterG(e)} defaultValue={'DEFAULT'} className={s.select}>
      <option value='DEFAULT' disabled>Genres</option>
      <option value='All'>All</option>
      {allgenres?.map(element => {
        return(<option value={element} key={element}>{element}</option>) 
      })}
    </select>
    <h4>Order by</h4>
    <label htmlFor='name'>Name</label>
    <select id='name' onChange={(e) => orderG(e)} defaultValue={'DEFAULT'} className={s.select}>
      <option value='DEFAULT' disabled>Alphabetical</option>
      <option value='A-Z'>A-Z</option>
      <option value='Z-A'>Z-A</option>
    </select>
    <label htmlFor='rating'>Rating</label>
    <select id='rating' onChange={(e) => orderG(e)} defaultValue={'DEFAULT'} className={s.select}>
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
    
    <h4>Show</h4>
    <label htmlFor='size'>Items on page</label>
    <select id='size' onChange={(e) => sizePage(e)} defaultValue={'DEFAULT'} className={s.select}>
      <option value='DEFAULT' disabled>Items</option>
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='15'>15</option>
    </select>         
  </div>
  ) : (
  <>
  <button onClick={e => changeShowMenu(e)} className={s.btn}>Filters</button>
  
  <div className={showMenu? (s.navHide1) : (s.navHide2)}>
    <button onClick={e => handleClean(e)} className={s.btn}>Clear</button>
    <h4>Filters</h4>
    <label htmlFor='storage'>Storage</label>
    <select id='storage' onChange={(e) => filterG(e)} defaultValue={'DEFAULT'} className={s.select}>
      <option value='DEFAULT' disabled>Storage</option>
      <option value='All'>All</option>
      <option value='Api'>Library</option>
      <option value='Db'>Added</option>
    </select>
    <label htmlFor='genre'>Genres</label>
    <select id='genre' onChange={(e) => filterG(e)} defaultValue={'DEFAULT'} className={s.select}>
      <option value='DEFAULT' disabled>Genres</option>
      <option value='All'>All</option>
      {allgenres?.map(element => {
        return(<option value={element} key={element}>{element}</option>) 
      })}
    </select>
    <h4>Order by</h4>
    <label htmlFor='name'>Name</label>
    <select id='name' onChange={(e) => orderG(e)} defaultValue={'DEFAULT'} className={s.select}>
      <option value='DEFAULT' disabled>Alphabetical</option>
      <option value='A-Z'>A-Z</option>
      <option value='Z-A'>Z-A</option>
    </select>
    <label htmlFor='rating'>Rating</label>
    <select id='rating' onChange={(e) => orderG(e)} defaultValue={'DEFAULT'} className={s.select}>
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
    
    <h4>Show</h4>
    <label htmlFor='size'>Items on page</label>
    <select id='size' onChange={(e) => sizePage(e)} defaultValue={'DEFAULT'} className={s.select}>
      <option value='DEFAULT' disabled>Items</option>
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='15'>15</option>
    </select>
  </div>
  </>)}
  
  </React.Fragment>
  )
};
