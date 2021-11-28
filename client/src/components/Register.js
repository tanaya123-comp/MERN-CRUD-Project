import React from 'react'
import './Register.css'
import undraw_Ride_a_bicycle_re_6tjy from '../images/undraw_Ride_a_bicycle_re_6tjy.png'

function Register() {
    return (
        <div className="container">

            <div className="card ">
                <div className="card-body" >
                    <div className="signup-form">
                            <div className="container2">
                                        <div className="brand-title">Sign Up</div>
                                        <div className="inputs">
                                            <label className="label1">Name</label>
                                            <input className="input1" type="text" placeholder="Your Name" />
                                            <label className="label1">Email</label>
                                            <input className="input1" type="email" placeholder="email@gmail.com" />
                                            <label className="label1">Phone</label>
                                            <input className="input1" type="text" placeholder="Your Number" />
                                            <label className="label1">Profession</label>
                                            <input className="input1" type="text" placeholder="Your Profession" />
                                            <label className="label1">Password</label>
                                            <input className="input1" type="password" placeholder="Password" />
                                            <label className="label1">Confirm PASSWORD</label>
                                            <input className="input1" type="password" placeholder="Confirm Password" />
                                            <button className="button1" type="submit">Register</button>
                                        </div>
                                
                                </div>
                                <div>
                                    <img style={{height:"300px",width:"500px"}} src={undraw_Ride_a_bicycle_re_6tjy} alt="draw"/>
                                </div>
                            </div>

                        <div>

                        </div>
                    </div>
                </div>  
        </div>
    )
}

export default Register
