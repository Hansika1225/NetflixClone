import React,{useState} from 'react';
import './Moviecard.css';


const MovieCardFavourite = ({
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
  function handleAddToFavourites(){
      alert(`${moviename} removed from your favourites!`);
      setCount(prev => Number(prev)-1);
      setismovieAdded(false);
      if (typeof onRemove === "function") {
       onRemove();  
  }
 }

  function handleAddToCart(){
     if(!ismovieAddedToCart){
      setCountCart(prev => Number(prev)+1);
      setIsmovieAddedToCart(true);
      alert(`${moviename} has been added to your Cart!`);
     }else{
      alert(`${moviename} removed from your Cart!`);
      setCountCart(prev => Number(prev)-1);
      setIsmovieAddedToCart(false);
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
           <button className='btn-fav' onClick={handleAddToFavourites}>Remove from Favourites</button>
           <button className='btn-cart' onClick={handleAddToCart}>{ismovieAddedToCart ? "Remove from Cart" : "Add to Cart"}</button>
        </div>
  </div>
  );
};

export default MovieCardFavourite;
