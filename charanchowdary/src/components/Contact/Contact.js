import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Contact.css'; 
import backgroundImage from '../../Images/clothes-bg.png'; 

import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

function Contact() {
  const sendEmail = () => {
    const email = 'charanchowdary355@gmail.com'
    const subject = 'Quote Request';
    const body = `
      First Name: ${document.getElementById('FirstName').value}
      Last Name: ${document.getElementById('LastName').value}
      Email: ${document.getElementById('Email').value}
      Phone Number: ${document.getElementById('PhoneNumber').value}
      Message: ${document.getElementById('Message').value}
    `;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
   
    <div className="landing_page">
      <div className="responsive-container-block big-container">
        <img className="bg-img" src={backgroundImage} alt="Background" />
        <div className="responsive-container-block container">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
            <div className="content-box">
              <p className="text-blk section-head" style={{ color: 'white' }}>
              Let's Connect
              </p>
              <p className="text-blk section-subhead" style={{ color: 'white' }}>
             "I'm eager to connect with you and explore exciting opportunities! 
              Whether you have questions, feedback, or potential collaborations, 
              don't hesitate to reach out. Let's start a conversation and together we can create something amazing".
              </p>
              <div className="icons-container">
                <a className="share-icon" href ='https://www.facebook.com/charanchowdary.cheery'>
                  <FaFacebook className="icon" style={{color :'white'}} />
                </a>
                <a className="share-icon" href=' href="mailto:charanchowdary355@gmail.com"'>
                  <AiOutlineMail className="icon" style={{color :'white'}}  />
                </a>
                <a className="share-icon"  href="https://github.com/SaiCharanChowdary">
                  <AiFillGithub className="icon" style={{color :'white'}}  />
                </a>
                <a className="share-icon"  href="https://www.instagram.com/cherry_charanchowdary/">
                  <FaInstagram className="icon" style={{color :'white'}} />
                </a>
              </div>
            </div>
          </div>
          <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one">
            <form className="form-box">
              <div className="container-block form-wrapper">
                <p className="text-blk contactus-head">
                  <a className="link" href=""></a>
                  Get In Touch
                </p>
                <p className="text-blk contactus-subhead"></p>
                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
                    <input className="input" id="FirstName" name="FirstName" placeholder="First Name" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
                    <input className="input" id="LastName" name="LastName" placeholder="Last Name" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 emial">
                    <input className="input" id="Email" name="Email" placeholder="Email" />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <input className="input" id="PhoneNumber" name="PhoneNumber" placeholder="Phone Number" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
                    <textarea className="textinput" id="Message" name="Message" placeholder="Type message here" ></textarea>
                  </div>
                </div>
                <button className="submit-btn" onClick={sendEmail}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;
