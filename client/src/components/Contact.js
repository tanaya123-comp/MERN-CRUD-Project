import React from 'react';
import './Contact.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';


function Contact() {
    return (
        <div className="container4">
            <div className="container3">
            <div className=" info-card">
                <div className="profile-card">
                    <div>
                    <PhoneAndroidIcon/>
                    </div>
                    <div>
                        <h5>Phone</h5>
                        <span>999999999</span>
                    </div>
                </div>
            </div>
            <div className="info-card">
            <div className="profile-card">
                    <div>
                    <EmailIcon/>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <span>tanayawankar58@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className=" info-card">
            <div className="profile-card">
                    <div>
                    <HomeIcon/>
                    </div>
                    <div>
                        <h5>Address</h5>
                        <span>Pune</span>
                    </div>
                </div>
            </div>

            </div>

            <div className="contact-card">
            <div className="card">
                <div className="card-body ">
                    <h3>Get In Touch</h3>
                    <div className="contact-info">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="tex" className="form-control" id="exampleFormControlInput1" placeholder="Your Phone"/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
            </div>

            </div>
            
        </div>
    )
}

export default Contact
