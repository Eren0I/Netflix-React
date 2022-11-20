import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    const [show, handleShow] = useState(false);
    const transitionNavBar= ()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return ()=>window.removeEventListener("scroll", transitionNavBar);
    },[])   
  return (
    <div className={`nav ${show &&"nav__black"}`}>
    <div className='nav__contents'>
    <NavLink style={{textDecoration: 'none'}} to="/Netflix-React/">
    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix Logo' className='nav__logo' />
    </NavLink>
    <NavLink style={{textDecoration: 'none'}} to="/profile">
    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix Avatar' className='nav__avatar' />
    </NavLink>
    </div>
    </div>
  )
}

export default Navbar