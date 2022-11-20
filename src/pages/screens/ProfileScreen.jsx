import React from 'react'
import Navbar from '../navbar/Navbar'
import "./profile.css"
import { auth } from '../../firebase/config';
import {useDispatch, useSelector} from "react-redux"
import {logout,login, selectUser} from "../../redux/userSlice"


const ProfileScreen = () => {
    const user = useSelector(selectUser)
  return (
    <div className="profileScreen">
    <Navbar/>
        <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
            <img className='profile__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
            <div className="profileScreen__details">
                <h2>{user.email}</h2>
        </div>
        </div>
        <h2>Plans (Current Plan: premium)</h2>
        <div className="profileScreen__plans">
            <div className="profileScreen__plan">
      
                    <h3>Netflix Standard</h3>
                    <h4>1080p</h4>  
                </div>
                <button className='subbut gray'>Subscribed</button>

            <div className="profileScreen__plan">

                    <h3>Netflix Basic</h3>
                    <h4>480p</h4>
  
            </div>
                <button className='subbut'>Subscribe</button>
            <div className="profileScreen__plan">
  
                    <h3>Netflix Premium</h3>
                    <h4>4K+HDR</h4>
  
            </div>
                <button className='subbut'>Subscribe</button>
        </div>
        <button onClick={()=> auth.signOut()} className="profileScreen__signOut">Sign Out</button>
        </div>
    </div>

  )
}

export default ProfileScreen