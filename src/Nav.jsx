import React from 'react'
import ReactDOM from 'react-dom'
import './Nav.css'
import logo from '/images/airbnb-logo.png'

export default function Nav(){
    return(
        <div className='navbar'>
            <img src={logo} alt='logo'/>
            
        </div>
    )
}