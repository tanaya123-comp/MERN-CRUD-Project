import React from 'react'
import './About.css'
import undraw_About_me_re_82bv from '../images/undraw_About_me_re_82bv.png';

function About() {
    return (
        <div>
            <div className="about-card">
                <div class="card">
                    <div class="card-body">
                        <div className="about-card-outer">
                            <div>
                            <img  style={{height:"300px",width:"300px"}}src={undraw_About_me_re_82bv} alt="profile"/>
                            <div style={{marginTop:'20px'}}>
                                <div>Youtuber</div>
                                <div>Instagram</div>
                                <div>Thapa Technical</div>
                                <div>LinkedIn</div>
                                <div>Figma</div>
                                <div>Twitter</div>
                            </div>
                            </div>

                            <div style={{padding:"10px"}}>
                                <h4>Tanaya Wankar</h4>
                                <div style={{color:'blue'}}>Web Developer</div>
                                <div>Rankings:1/10</div>
                                <button style={{marginTop:'10px'}} type="button" class="btn btn-primary">Edit Info</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
