import React from 'react';
import './Navbar.css';
import './App.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = ({count,countCart}) => {
  return (
    <nav className="navbar">
      <img src="https://tse4.mm.bing.net/th?id=OIP.R7ehEbM6OU6moFpF_WAXJQHaE_&pid=Api&P=0&h=180" alt="logo" className="logo" />
      <div id="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div id="buttons">
       
        <p style={{color : 'white'}}>{count}</p>
        <Link to="/favourite">
        <button id="favourites">
            <FaHeart />
        </button>
       </Link>
       
       <p style={{color : 'white'}}>{countCart}</p>
       <Link to="/cart">
        <button id="cart">
            <FaShoppingCart />
        </button>
      </Link>  
        </div>
 
    </nav>
  );
};

export default Navbar;
