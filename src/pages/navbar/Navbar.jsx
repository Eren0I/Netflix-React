import React, { useEffect, useState } from 'react'
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
    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix Logo' className='nav__logo' />
    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix Avatar' className='nav__avatar' />
    </div>
    </div>
  )
}

export default Navbar