import { useEffect, useState } from 'react'
import './index.css'
import HomeScreen from './pages/screens/HomeScreen'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginScreen from './pages/screens/LoginScreen'
import { auth } from './firebase/config';
import {useDispatch, useSelector} from "react-redux"
import {logout,login, selectUser} from "./redux/userSlice"
import ProfileScreen from './pages/screens/ProfileScreen'

function App() {
  const user = useSelector(selectUser)
const dispatch = useDispatch();

useEffect(() => {

  const unsubscribe = auth.onAuthStateChanged((userAuth) => {

    if (userAuth) {
      dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email,
      }))
    } else {
      dispatch(logout())
    }
  })
  return unsubscribe
}, [dispatch])

  return (
    <div className="App">
      <Router>
      {!user ? (
        <LoginScreen/>
      ) : ( 
      <Routes>
          <Route path="/Netflix-React/" element={ <HomeScreen />}>  </Route>
          <Route path="/profile" element={ <ProfileScreen />}>  </Route>
        </Routes>
        )}
    </Router>
    </div>
  
  )
}

export default App
