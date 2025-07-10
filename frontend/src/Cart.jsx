import React from 'react'
import Navbar from './Navbar';
import './Navbar.css';
import { useEffect, useState } from 'react';
import MovieCardCart from './MovieCardCart';
import './Moviecard.css';

const Cart = () => {
  const [count, setCount] = useState(() => {
    const favs = JSON.parse(localStorage.getItem("movies")) || [];
    return favs.length;
  });

  const [movieCart, setMovieCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [countCart, setCountCart] = useState(movieCart.length);

  useEffect(() => {
    setCountCart(movieCart.length);
  }, [movieCart]);


  return (
    <>
      <Navbar count={count} countCart={countCart} />
      <div className='movieList'>
        {movieCart.map((movie, index) => (
          <MovieCardCart
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
              const updatedCart = [...movieCart];
              updatedCart.splice(index, 1); // remove using array index
              localStorage.setItem("cart", JSON.stringify(updatedCart));
              setMovieCart(updatedCart);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default Cart;
