import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo}></img>
            <p>
                Enjoy the food
            </p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon}></img>
                <img src={assets.twitter_icon}></img>
                <img src={assets.linkedin_icon}></img>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Mobile-App</li>
                <li>Contact-Us</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Get in touch</h2>
            <ul>
                <li>+12566</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>
    </div>
      <hr></hr>
      <p className='footer-copyright'>Do not copy</p>
    </div>
  )
}
export default Footer
