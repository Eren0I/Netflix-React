import React, {useRef} from 'react'
import "./signup.css"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const SignupScreen = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const navigate = useNavigate()


    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,
            emailRef.current.value,
            passwordRef.current.value
            ). then((authUser)=>{
                
            }).catch((error)=>{
                alert(error.message)
            })
    }
    const SıgnIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth,
            emailRef.current.value,
            passwordRef.current.value
            ). then((authUser)=>{
                navigate("/Netflix-React/")
            }). catch((error)=>
                alert(error.message))
            
    }
  return (
    <div className='signupScreen'>
        <form >
        <h1>Sign In</h1>
        <input ref={emailRef}  type="email" placeholder="Email"/>
        <input ref={passwordRef}  type="password" placeholder="Password"/>
        <button  onClick={SıgnIn} type="submit">Sign In</button>
        <h4>
            <span className="signupScreen__gray">New to Netflix? </span>
            <span onClick={register} className="signupScreen__link">Sign up now.</span>
        </h4>
        </form>

    </div>

  )
}

export default SignupScreen