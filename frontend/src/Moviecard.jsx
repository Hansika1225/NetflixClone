import React,{useState} from 'react';
import './Moviecard.css';

const Moviecard = ({image,moviename,genre,description,rating,count,setCount,countCart,setCountCart}) => {
  const [ismovieAdded, setismovieAdded] = useState(false);
  const [ismovieAddedToCart, setIsmovieAddedToCart] = useState(false);

  function handleAddToFavourites(){
     if(!ismovieAdded){
      setCount(prev => Number(prev)+1);
      setismovieAdded(true);
      alert(`${moviename} has been added to your favourites!`);
      const existingMovies = JSON.parse(localStorage.getItem("movies")) || [];
      const newMovie = {
         moviename,
         description,
         genre,
         rating,
         image
      };
      existingMovies.push(newMovie);
      localStorage.setItem("movies" , JSON.stringify(existingMovies));
     }else{
      alert(`${moviename} removed from your favourites!`);
      setCount(prev => Number(prev)-1);
      setismovieAdded(false);
      const existingMovies = JSON.parse(localStorage.getItem("movies")) || [];
      const updatedMovies = existingMovies.filter(movie => movie.moviename !== moviename);
      localStorage.setItem("movies" , JSON.stringify(updatedMovies));
  }
}

  function handleAddToCart(){
     if(!ismovieAddedToCart){
      setCountCart(prev => Number(prev)+1);
      setIsmovieAddedToCart(true);
      alert(`${moviename} has been added to your Cart!`); 
       const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const newCart = {
        moviename,
        description,
        genre,
        rating,
        image
      };
      existingCart.push(newCart);
      localStorage.setItem("cart", JSON.stringify(existingCart));
     }else{
      alert(`${moviename} removed from your Cart!`);
      setCountCart(prev => Number(prev)-1);
      setIsmovieAddedToCart(false);
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = existingCart.filter(movie => movie.moviename !== moviename);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
     }
  }

  return (
    <div className="movie-card">
        <img src={image} alt={moviename}  className='movie-image'/>
        <div className='movie-details'>
           <h2 className='movie-title'>{moviename}</h2>
           <h3 className='movie-genre'>Genre : {genre}</h3>
           <h3 className='movie-desc'>Description: {description}</h3>
           <h3 className='movie-rating'>Rating : {rating}</h3>
           <button className='btn-fav' onClick={handleAddToFavourites}>{ismovieAdded ? "Remove from Favourites" : "Add to Favourites"}</button>
           <button className='btn-cart' onClick={handleAddToCart}>{ismovieAddedToCart ? "Remove from Cart" : "Add to Cart"}</button>
        </div>
  </div>
  );
};

export default Moviecard;
