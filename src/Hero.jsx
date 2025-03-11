import React from 'react'
import meImages from './images/me.jpg'

function Hero (){
  return(
    <section className="Hero-section">
    <div className="container">
      <div className="text-container">
      <h1>It's Me Nifled</h1>
      <p>Frontend Developer</p>
      
      </div>
      <div className="hero-image">
        <img src={meImages} alt="life's Motto"/>

      </div>
    </div>
    </section>

  );
}

export default Hero