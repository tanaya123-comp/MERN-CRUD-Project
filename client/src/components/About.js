import React from 'react'
import './About.css'
import profile2 from '../images/profile2.png';

function About() {
    return (
        <div>
            <div className="about-card">
                        <div className="about-card-outer">
                            <div>
                                    <img  style={{height:"200px",width:"200px"}}src={profile2} alt="profile"/>
                                    <div className="social-links">
                                        <div>Youtuber</div>
                                        <div>Instagram</div>
                                        <div>Thapa Technical</div>
                                        <div>LinkedIn</div>
                                        <div>Figma</div>
                                        <div>Twitter</div>
                                    </div>
                            </div>
                            </div>

                            <div className="about-card-outer">
                                <div  style={{padding:"10px"}}>
                                    <h4>Tanaya Wankar</h4>
                                    <div style={{color:'blue'}}>Web Developer</div>
                                    <div>Rankings:1/10</div>
                                    <button style={{marginTop:'10px'}} type="button" class="btn btn-primary">Edit Info</button>
                                    
                                    <div className="personal-info">
                                        <h5>About</h5>
                                        <div>
                                            <div className="text">User Id      <span style={{marginLeft:'100px'}}>1</span></div>
                                            <div className="text">Name <span style={{marginLeft:'110px'}}>Tanaya</span></div>
                                            <div className="text">Email<span style={{marginLeft:'120px'}}>tanayawankar58@gmail.com</span></div>
                                            <div className="text">Phone<span style={{marginLeft:'115px'}}>7774031715</span></div>
                                            <div className="text">Profession<span style={{marginLeft:'85px'}}>Engineer</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
        </div>
    )
}

export default About
