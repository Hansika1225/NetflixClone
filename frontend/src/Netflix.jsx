import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import "./Navbar.css";
import Moviecard from './Moviecard';
import "./Moviecard.css";

const Netflix = () => {
  const [count, setCount] = useState(0);
  const [countCart, setCountCart] = useState(0);
  const [moviesArray, setMoviesArray] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    imageURL: "",
    name: "",
    genre: "",
    description: "",
    rating: ""
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:8000/movies', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie),
    });

    if (response.ok) {
      console.log("Movie added successfully");

    
      setNewMovie({
        imageURL: "",
        name: "",
        genre: "",
        description: "",
        rating: ""
      });
      setShowForm(false);

      
      const updatedResponse = await fetch('http://localhost:8000/movies');
      const updatedData = await updatedResponse.json();
      setMoviesArray(updatedData);

    } else {
      const err = await response.text();
      console.error("Failed to add movie:", err);
    }
  } catch (error) {
    console.error("Error occurred during POST:", error);
  }
};


  useEffect(() => {
    const fetchMovies = async() => {
      try{
        const response = await fetch('http://localhost:8000/movies');
        if(!response.ok){
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched movies:", data);
        setMoviesArray(data);
      }catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  },[]);

  return (
    <>
      <Navbar count={count} countCart={countCart} />

      <button onClick={() => setShowForm(!showForm)} style={{ margin: '1rem' }}>
        {showForm ? "Cancel" : "Add Movie"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ margin: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '300px' }}>
          <input type="text" name="imageURL" placeholder="Image URL" value={newMovie.imageURL} onChange={handleChange} required />
          <input type="text" name="name" placeholder="Movie Name" value={newMovie.name} onChange={handleChange} required />
          <input type="text" name="genre" placeholder="Genre" value={newMovie.genre} onChange={handleChange} required />
          <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} required />
          <input type="number" step="0.1" name="rating" placeholder="Rating" value={newMovie.rating} onChange={handleChange} required />
          <button type="submit">Add Movie</button>
        </form>
      )}

      <div className='movieList'>
        {moviesArray.map((movie, index) => (
          <Moviecard
            key={index}
            image={movie.imageURL}
            moviename={movie.name}
            genre={movie.genre}
            description={movie.description}
            rating={movie.rating}
            count={count}
            setCount={setCount}
            countCart={countCart}
            setCountCart={setCountCart}
          />
        ))}
      </div>
    </>
  );
};

export default Netflix;
