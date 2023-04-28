import React from "react";
import reactDOM from 'react-dom'
import grid from '/images/photo-grid.png'
import './Hero.css'


export default function Hero(){
    return(
    <div className="hero">
        <img src={grid} alt='photo grid'/>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </div>
)}



