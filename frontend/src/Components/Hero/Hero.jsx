import React from 'react'
import'./Hero.css'
import hero_image from '../Assets/hero.png'




export const Hero = () => {
  return (
    <div className='hero'>  
    
        <div className="hero-left">

            <div>
                <p>"Fashion is about dreaming and making other people dream." </p>
                <p>- Donatella Versace</p>
                <p></p>
                
                 {/*<div className="hero-frock-icon">

                    <img src={frock_icon} alt="" />
                </div> */}
            </div>
            <h2>Our Main Objective is to Deliver High Quality Products To Our Customers</h2>
            {/* <div className="hero-latest-btn">
                <div>See our Designs</div>
                <img src={arrow_icon} alt="" />
            </div> */}
        </div>
   
        <div className="hero-right">
            <img src={hero_image} alt="" />

        </div>
    </div>
  )
}

export default Hero