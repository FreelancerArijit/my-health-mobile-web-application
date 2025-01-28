// src/components/Card.js
import React from 'react';

function Card({ icon, title, description }) {
  return (
    <div className="card">
      <img src={icon} alt="icon" />
      <div>
      <h2>{title}</h2> 
      <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
