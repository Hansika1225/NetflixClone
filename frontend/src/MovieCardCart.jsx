import React,{useState} from 'react';
import './Moviecard.css';


const MovieCardCart = ({
  image,
  moviename,
  genre,
  description,
  rating,
  count,
  setCount,
  countCart,
  setCountCart,
  onRemove   // ⬅ this is how you receive the prop
}) => {
  const [ismovieAdded, setismovieAdded] = useState(false);  
  const [ismovieAddedToCart, setIsmovieAddedToCart] = useState(false);
  function handleAddToCart(){
      alert(`${moviename} removed from your Cart!`);
      setIsmovieAddedToCart(false);
      if (typeof onRemove === "function") {
       onRemove();  
  }
 }

  function handleAddToFavourites(){
     if(!ismovieAdded){
      setCount(prev => Number(prev)+1);
      setismovieAdded(true);
      alert(`${moviename} has been added to your Favourites!`);
     }else{
      alert(`${moviename} removed from your Favourites!`);
      setCount(prev => Number(prev)-1);
      setismovieAdded(false);
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
           <button className='btn-cart' onClick={handleAddToCart}>Remove from Cart</button>
        </div>
  </div>
  );
};

export default MovieCardCart;
