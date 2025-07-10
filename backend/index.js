const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movie = require('./models/movie');
const cors = require('cors');
const movies = require('./MovieData'); 
app.use(cors());
app.use(express.json());

const PORT = 8000;

mongoose.connect('mongodb://localhost:27017/netflix-database', {  
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
    console.log("Connected To MongoDB");

    
    const count = await Movie.countDocuments();
    if (count === 0) {
      await Movie.insertMany(movies);
      console.log("Auto-seeded movie data");
    } else {
      console.log("Movie data already exists");
    }

}).catch(err => {
    console.log("Error connecting to MongoDB:" , err);
});

app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch(error) {
    console.log('Error fetching movies:', error);
    res.status(500).json({ message: 'Internal Server error' });
  }
});

app.post('/movies', async (req, res) => {
  const { imageURL, name, genre, description, rating } = req.body;
  try {
    const newMovie = new Movie({
      imageURL,
      name,
      genre,
      description,
      rating
    });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch(error) {
    console.log('Error creating movies:', error);
    res.status(500).json({ message: 'Internal Server error' });
  }
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { imageURL, name, genre, description, rating } = req.body;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { imageURL, name, genre, description, rating },
      { new: true }
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(updatedMovie);
  } catch(error) {
    console.log('Error updating movies:', error);
    res.status(500).json({ message: 'Internal Server error' });
  }
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch(error) {
    console.log('Error deleting movies:', error);
    res.status(500).json({ message: 'Internal Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
