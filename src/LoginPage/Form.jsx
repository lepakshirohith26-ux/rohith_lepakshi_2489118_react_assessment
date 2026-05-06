import {useState} from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { WelcomeTextSideB } from "./WelcomeText"

function Email({setEmail}){
    return(
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="demo@shop.com" onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
    )
}

function Password({setPassword}){
    return(
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} required />
        </div>
    )
}

function Extras(){
    return(
        <div className="form-extras">
            <label>
                <input type="checkbox" />
                Remember me
            </label>
            <a href="google.com">Forgot password?</a>
        </div>
    )
}

function Button({validation,email,password}){
    return (
        <button type="button" className="login-btn" onClick={()=>validation(email,password)} >Sign In</button>
    )
}

function Form(){
    let [email,setEmail] =useState("");
    let [password,setPassword]=useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    function validation(a,b){
        email=a.trim();
        password=b.trim();
        if (login(email, password)) {
            navigate('/');
        } else {
            alert("Invalid credentials");
        }
    }
    return(
        <div className="login-form-container">
            <h3>Welcome back</h3>
            <p>Sign in to continue to your account</p>
            <Email setEmail={setEmail} />
            <Password setPassword={setPassword} />
            <Extras />
            <Button validation={validation} email={email} password={password} />
            <div className="login-divider">OR</div>
            <div className="login-signup">
                Don't have an account? <a href="/signup">Sign up</a>
            </div>
            <div className="login-footer">
                Test credentials: demo@shop.com / demo123
            </div>
        </div>
    )
}

export default Form;