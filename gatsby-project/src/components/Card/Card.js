import React from "react"

import "./Card.css"

const Card = ({ title, text, image }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
      <img src={image} />
    </div>
  )
}

export default Card
