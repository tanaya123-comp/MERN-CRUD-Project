import React from 'react'
import './Login.css'
import undraw_Programming_re_kg9v from '../images/undraw_Programming_re_kg9v.png'

function Login() {
    return (
        <div className="container">
            <div className="card ">
                <div className="card-body" >
                    <div className="signup-form">
                            <div className="container2">
                                        <div className="brand-title">Login</div>
                                        <div className="inputs">
                                            <label className="label1">Email</label>
                                            <input className="input1" type="email" placeholder="email@gmail.com" />
                                            <label className="label1">Password</label>
                                            <input className="input1" type="password" placeholder="Password" />
                                            <button className="button1" type="submit">LOGIN</button>
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
