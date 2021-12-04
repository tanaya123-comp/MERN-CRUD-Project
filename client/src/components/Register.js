import React,{useState} from 'react'
import './Register.css'
import {useHistory} from 'react-router-dom'
import undraw_Ride_a_bicycle_re_6tjy from '../images/undraw_Ride_a_bicycle_re_6tjy.png'

function Register() {

    const history=useHistory();

    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    })

    let name,value;

    const handleInput=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
        console.log(user)
    }

    const PostData=async (e)=>{
        e.preventDefault();

        const {name,email,phone,work,password,cpassword}=user;

        const res=await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "name":name,
                "email":email,
                "phone":phone,
                "work":work,
                "password":password,
                "cpassword":cpassword
            })

           


        })

        const data=await res.json();

        if(data.status===422||!data)
        {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else
        {
            window.alert(" Registration Successful");
            console.log("Registration Successful");

            history.push('/login')
        }
    }

    return (
        <div className="container">

            <div className="card ">
                <div className="card-body" >
                    <div className="signup-form">
                            <div className="container2">
                                        <div className="brand-title">Sign Up</div>
                                        <div className="inputs">
                                            <label className="label1">Name</label>
                                            <input className="input1" name="name" value={user.name} onChange={handleInput} type="text" placeholder="Your Name" />
                                            <label className="label1">Email</label>
                                            <input className="input1" name="email" value={user.email} onChange={handleInput} type="email" placeholder="email@gmail.com" />
                                            <label className="label1">Phone</label>
                                            <input className="input1" name="phone" value={user.phone} onChange={handleInput} type="text" placeholder="Your Number" />
                                            <label className="label1">Profession</label>
                                            <input className="input1" name="work" value={user.work} onChange={handleInput}  type="text" placeholder="Your Profession" />
                                            <label className="label1">Password</label>
                                            <input className="input1" name="password" value={user.password} onChange={handleInput} type="password" placeholder="Password" />
                                            <label className="label1">Confirm PASSWORD</label>
                                            <input className="input1" name="cpassword" value={user.cpassword} onChange={handleInput} type="password" placeholder="Confirm Password" />
                                            <button onClick={PostData} className="button1" type="submit">Register</button>
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
