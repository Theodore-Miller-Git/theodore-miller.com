import React, { Component, useEffect, useState, useTransition } from 'react'
import './Contact.scss';

import { getImageUrl } from "../../../utils";
import { text } from '@fortawesome/fontawesome-svg-core';
<script src="https://www.google.com/recaptcha/enterprise.js?render=6LfMSBgqAAAAAEkQHmE7Um8JXXPL114Ptn-BoeIi"></script>

export const Contact = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {

    const isFormValid = true; 

    if (isFormValid) {
      setShowSuccess(true);
      setShowError(false);
  
      setTimeout(() => {
        setShowSuccess(false);
      }, 30000);

    } else {
      setShowError(true);
      setShowSuccess(false);

      setTimeout(() => {
        setShowError(false);
      }, 30000);
    }
  };

    return (
      <>
        <div id="body-content">
          <h1>Contact Me</h1>
          <p className="sub-title">Get in touch to find out more about me.</p><br />
          
          <div id="contact-container">
            <div className="contact-info">
              <h4>Contact information</h4>
              <p>Fill out the form and contact me!</p>
              <div className="icon-text">
              <i className="icon" class="fa-solid fa-phone"></i>
                <span>(956) 309-2273</span>
              </div>
              <div className="icon-text">
              <i className="icon" class="fa-solid fa-envelope"></i>
                <span>tmiller@theodore-miller.com</span>
              </div>
              <div className="icon-text">
              <i className="icon" class="fa-solid fa-location-dot"></i>
                <span>Houston, Tx.</span>
              </div>
              <div className="social-media">
                
                <a href="https://www.linkedin.com/in/theodorecmiller/" className="icon-circle" target='_blank'>
                <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="mailto:tmiller@theodore-miller.com" className="icon-circle" target='_blank'>
                <i class="fa-regular fa-envelope"></i>
                </a>
                <a href="https://dot.cards/theodoremiller" className="icon-circle" target='_blank'>
                <i class="fa-regular fa-address-card"></i>
                </a>
              </div>
              
            </div>
            <form name="ContactForm" action="https://submit-form.com/4RR5ZbqTE" target="dummyframe" onSubmit={handleSubmit}>
              <input type="hidden" name="_redirect" value="https://theodore-miller.com" />
              <div className="col">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" id="firstname" name="first_name" placeholder="First Name" required="" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" id="lastname" name="last_name" placeholder="Last Name" required="" />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>E-Mail</label>
                  <input type="email" id="email" name="email" placeholder="E-Mail" required="" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" id="phonenumber" name="phonenumber" placeholder="(555) 555-5555" required="" />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>What would you like to message me about?</label>
                  <div id="radio-buttons">
                    <div className="radio-button">
                      <input type="radio" name="type" value="Web Design" id="radiowebdesign" for="radiowebdesign" /><label>Web Design</label>
                    </div>
                    <div className="radio-button">
                      <input type="radio" name="type" value="I.T. Managed Services" id="radioitservices" for="radioitservices" /><label>I.T. Managed Services</label>
                    </div>
                    <div className="radio-button">
                      <input type="radio" name="type" value="Sales Engineering" id="radiosalesengineering" for="radiosalesengineering" /><label>Sales Engineering</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-group solo">
                  <label>Message</label>
                  <textarea id="message" name="message" placeholder="Message" required=""></textarea>
                </div>
              </div>
              <div className="col">
                <div className="form-group solo right">
                  <button className="primary" data-sitekey="6LfMSBgqAAAAAEkQHmE7Um8JXXPL114Ptn-BoeIi" data-callback='onSubmit' data-action='submit' onClick="formSubmit()" id="send">Send Message</button>
                </div>
              </div>
              <div className="message">
                <div className="success" id="success" style={{ display: showSuccess ? 'flex' : 'none' }}>
                  Your Message was Successfully Sent!
                </div>
                <div className="danger" id="danger" style={{ display: showError ? 'flex' : 'none' }}>
                  Fields Can't be Empty!
              </div>
              <iframe name="dummyframe" id="dummyframe" className="nodisplay" width="0" height="0" border="0"></iframe>
              </div>
            </form>
          </div>
        </div>
      </>
      )
}
    
