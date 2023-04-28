import React from "react";
import ReactDOM from 'react-dom/client'
import'./App.css'
import Nav from "./Nav";
import Hero from "./Hero";
import Card from "./Card";
import data from '../data'
export default function App(){
  const Cards = data.map(card => {
    return (
      <Card 
      key={card.id}
      item={card}
      />
    )
})
  return(
    <div>
      <Nav/>
      <Hero/>
      <div className="cards">
          {Cards}
          {Cards}
       </div>
     
      
    </div>
    
  )
}
/*
- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)*/


/* <Card 
          img="card.png" 
          rating="5.0"
          reviewCount ={6}
          country ="USA"
          title = "Life Lessons with Katie Zaferes"
          price = {139}
      /> */