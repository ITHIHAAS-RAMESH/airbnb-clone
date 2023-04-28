import React from 'react'
import ReactDOM from 'react-dom'
import './Card.css'

import star from '/images/star.png'
export default function Card(props){
    let badgeItem
    if(props.item.openSpots===0){
        badgeItem = "SOLD OUT"
    }else if(props.item.location ==='Online'){
        badgeItem = "ONLINE"
    }
    return (
        <div className='card-outer'>
            
        <div className='card'>
        {badgeItem && <div className="card--badge">{badgeItem}</div>}
            <img src={`/images/${props.item.coverImg}`} alt='card'/>
            
            <div className='card-rating'>
                <img src={star} alt='star'/>
                <h4>{props.item.stats.rating}</h4>
                <h4 className='grey'>({props.item.stats.reviewCount})</h4>
                <div className='grey dot'></div>
                <h4 className='grey'>{props.item.lacation}</h4>
            </div>
            <h4 className='disp'>{props.item.title}</h4>
            <h4 className='disp price'><b>From ${props.item.price} </b>/ person</h4>
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