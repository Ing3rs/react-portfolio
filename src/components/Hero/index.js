import React from 'react';
import './style.css';

function Hero(props) {
    return (
      // <div className="hero" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <div className="hero">
        {props.children}
      </div>
    );
  }
  
  export default Hero;
  