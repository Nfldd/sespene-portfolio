import React from 'react'
import images from './images/me.jpg'
function Hero (){
  return(
    <section classname="Hero-section">
    <div classname="container">
      <div classname="text-container">
      <h1>It's Me Nifled</h1>
      <p>Frontend Developer</p>
      <button>About me</button>
      </div>
      <div classname="hero-image">
        <img src={images} alt="life's Motto"/>

      </div>
    </div>
    </section>
  );
}

export default Hero