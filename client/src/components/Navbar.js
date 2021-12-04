import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import undraw_handcrafts_heart from '../images/undraw_handcrafts_heart.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img className="navbar-brand" style={{height:"80px",width:"80px"}} src={undraw_handcrafts_heart} alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" style={{marginLeft:"auto"}}>
                        
                        <li className="nav-item  ">
                        <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item ">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item ">
                        <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item ">
                        <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item ">
                        <Link className="nav-link" to="/register">Registration</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar
