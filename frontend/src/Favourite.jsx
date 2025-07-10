import React from 'react'
import Navbar from './Navbar';
import './Navbar.css';
import { useEffect,useState } from 'react';
import MovieCardFavourite from './MovieCardFavourite';
import './Moviecard.css';

const Favourite = () => {
    const [count, setCount] = useState(() => {
  const favs = JSON.parse(localStorage.getItem("movies")) || [];
  return favs.length;
  });
    const [movies,setMovies] = useState([]);
    const [countCart, setCountCart] = useState(0);

   useEffect(() =>{
     const moviesArray = JSON.parse(localStorage.getItem("movies")) || [];
     setMovies(moviesArray);
 },[]) ;
  return (
    <>
    <Navbar count={count}
     countCart={countCart}/>
    <div className='movieList'>
    {movies.map((movie,index) => (
    <MovieCardFavourite
       key={index}
       image={movie.image}
       moviename={movie.moviename}
       genre={movie.genre}
       description={movie.description}
       rating={movie.rating}
       count={count}
       setCount={setCount}
       countCart={countCart}
       setCountCart={setCountCart}
       onRemove={() => {
       const updatedMovies = [...movies];
       updatedMovies.splice(index, 1); // remove using array index
       localStorage.setItem("movies", JSON.stringify(updatedMovies));
       setMovies(updatedMovies);
       }}
    />
   )
      
  )}
  </div>
  </>
  )
}

export default Favourite