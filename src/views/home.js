import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bear Case</title>
        <meta property="og:title" content="Bear Case" />
      </Helmet>
      <div className="home-navbar navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/853863445_penguins_ice_cream_stand_in_antarctica_baskin_robbins_style_8k_digital_art-1500w.png"
              className="home-image"
            />
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="home-hero hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-description">
              Reserve NFT by sending to the address mentioned below
            </span>
            <h1 className="home-title">32 LRC or 0.0069 ETH</h1>
            <button className="home-button button button-transparent">
              0xef983589FC5af54a5f5864B0B01bac5BE69b04a3
            </button>
    




<div class="colorDiv" id="firstColorObject">
    <h3 class="colorCode" id="p1" value="123">0xef983589FC5af54a5f5864B0B01bac5BE69b04a3</h3>
    <div style="opacity:0">
        <input type="text" id="copyText"/>
    </div>
</div>


document.querySelector("#firstColorObject").addEventListener("click", function(){

    var p1 = document.getElementById("p1");
    
    // set "#Color 1" with the hidden field so that you can call select on it
    var hiddenField = document.getElementById("copyText");
    hiddenField.value = p1.innerHTML;
    hiddenField.select();
    document.execCommand("copy");
    
    alert("Copied the text: " + hiddenField.value);

}, false);

    
            <div className="home-container1">
              <button className="button button-gradient">Copy</button>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/playground_assets/piic-500h.png"
              className="home-hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
