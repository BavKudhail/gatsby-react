import React from "react"
import "./Hero.css"
import reactLogo from "../../../images/react.png"
import graphQL from "../../../images/graphql.png"
import redux from "../../../images/redux.png"
import sass from "../../../images/sass.png"
import html from "../../../images/html.png"
import tailwind from "../../../images/tailwind-css-logo-5AD4175897-seeklogo.com.png"
import Card from "../../Card/Card"
import Wave from "../../Wave"

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="heroGroup">
          <h1>
            Hey there, <br /> I'm
            <span className="name"> Bav Kudhail</span>
          </h1>
          <p>I build stunning web applications</p>
          <button className="CTA">Let's Talk</button>
          <div className="techStack">
            <img src={reactLogo} width="50px" />
            <img src={graphQL} width="50px" />
            <img src={redux} width="50px" />
            <img src={sass} width="50px" />
            <img src={html} width="50px" />
            <img src={tailwind} width="50px" />
          </div>
          <Wave />
        </div>
      </div>
    </div>
  )
}

export default Hero
