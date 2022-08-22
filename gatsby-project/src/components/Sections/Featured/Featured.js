import React from "react"
import FeaturedCard from "../../Card/FeaturedCard"
import "./Featured.css"

const Featured = () => {
  return (
    <>
      <div className="featured">
        <h2 className="head-text">Featured Projects</h2>
        <h3 className="sub-text">
          Show me the code! <span>💻</span>
        </h3>
        <FeaturedCard />
      </div>
    </>
  )
}

export default Featured
