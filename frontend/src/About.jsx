import React from 'react'
import Navbar from './Navbar';
import './Navbar.css';
import { useState } from 'react';
import './App.css';
const About = () => {
  const [count,setCount] = useState(0);
  const [countCart, setCountCart] = useState(0);
  return (
    <>
    <Navbar count={count}
     countCart={countCart}/>
     <div className="about-container">
      <h1>About Netflix Clone</h1>
      <p>
        This Netflix clone project is built using React to showcase movie listings,
        favourites, and cart functionalities. It demonstrates state management,
        routing, and localStorage usage for a seamless user experience.
      </p>
      <p>
        The app lets you browse movies, add them to your favourites, and manage your watch cart.
        Enjoy exploring the features and learning React!
      </p>
    </div>
    </>
  )
}

export default About