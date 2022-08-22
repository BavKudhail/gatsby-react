import React from "react"
import "./FeaturedCard.css"
import macroMeals from "../../images/macromeals.jpg"

const FeaturedCard = () => {
  return (
    <>
      <div className="project-container">
        <div>
          <img className="project-image" src={macroMeals} />
        </div>
        <div>
          <div className="text-container">
            <h5>Project Title</h5>
            <p>Project Description</p>
          </div>
          <div className="tech-container">
            <span>Tech Stack</span>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedCard
