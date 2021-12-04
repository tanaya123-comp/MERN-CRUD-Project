import React,{useState} from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';
import undraw_Programming_re_kg9v from '../images/undraw_Programming_re_kg9v.png'

function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();

    const loginUser=async (e)=>{
        e.preventDefault();

        const res=await fetch("/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        })

        const data=await res.json();

        if(data.status===400||!data)
        {
            window.alert('Invalid Credentials');
        }
        else
        {
            window.alert('Login Successful');
            history.push('/');
        }

    }

    return (
        <div className="container">
            <div className="card ">
                <div className="card-body" >
                    <div className="signup-form">
                            <div className="container2">
                                        <div className="brand-title">Login</div>
                                        <div className="inputs">
                                            <label className="label1">Email</label>
                                            <input className="input1" name="email" type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="email@gmail.com" />
                                            <label className="label1">Password</label>
                                            <input className="input1" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                                            <button className="button1" onClick={loginUser} type="submit">LOGIN</button>
                                        </div>
                                
                                </div>
                                <div>
                                    <img style={{height:"300px",width:"500px"}} src={undraw_Programming_re_kg9v} alt="draw"/>
                                </div>
                            </div>

                        <div>

                        </div>
                    </div>
                </div>  
        </div>
    )
}

export default Login
