import React from 'react'
import meImages from './images/me.jpg'

function Hero (){
  return(
    <section className="Hero-section">
    <div className="container">
      <div className="text-container">
      <h1>𝙸𝚃'𝚂 𝙼𝙴 𝙽𝙸𝙵𝙻𝙴𝙳</h1>
      <h1>_______________________</h1>
      <p>ＦＲＯＮＴＥＮＤ ＤＥＶＥＬＯＰＥＲ</p>
      </div>
      <div className="hero-image">
        <img src={meImages} alt="life's Motto"/>

      </div>
    </div>
    </section>

  );
}

export default Hero