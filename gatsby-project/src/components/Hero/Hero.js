import React from "react"
import "./Hero.css"
import reactLogo from "../../images/react.png"
import graphQL from "../../images/graphql.png"
import redux from "../../images/redux.png"
import sass from "../../images/sass.png"
import html from "../../images/html.png"
import Card from "../Card/Card"

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="heroGroup">
          <h1>
            Hey there, <br /> I'm Bav Kudhail
          </h1>
          <p>I build stunning web applications</p>
          <div className="techStack">
            <img src={reactLogo} width="50px" />
            <img src={graphQL} width="50px" />
            <img src={redux} width="50px" />
            <img src={sass} width="50px" />
            <img src={html} width="50px" />
          </div>
          <svg
            width="100%"
            height="400"
            viewBox="0 0 2483 408"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="" fill="#fff">
              <animate
                repeatCount={"indefinite"}
                fill="freeze"
                attributeName="d"
                dur={"30s"}
                values="M4458 576L0.000174522 576L0.000196892 320.116C0.000196892 320.116 1336.11 488.952 2440.92 123.492C3545.73 -241.967 4458 320.116 4458 320.116L4458 576Z;
                M4458 545L0.000174522 545L0.000196905 288.973C0.000196905 288.973 966.546 -197.844 2440.92 92.2395C3915.29 382.323 4458 288.973 4458 288.973L4458 545Z;
                M4458 408L0.000174522 408L0.000196923 151.765C0.000196923 151.765 1192.68 265.361 2413.78 69.7912C3634.89 -125.779 4458 151.765 4458 151.765L4458 408Z;
                M4458 576L0.000174522 576L0.000196892 320.116C0.000196892 320.116 1336.11 488.952 2440.92 123.492C3545.73 -241.967 4458 320.116 4458 320.116L4458 576Z
                "
              />
            </path>
          </svg>
        </div>
      </div>
      <div className="cards">
        <h2>My Projects</h2>
      </div>
      <div className="cardGroup">
        <Card
          title="React for Designers"
          text="12 sections"
          image={
            "https://hbr.org/resources/images/article_assets/2022/04/01-BI_WEB3_STACKPOLE_HERO.jpg"
          }
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={
            "https://hbr.org/resources/images/article_assets/2022/04/01-BI_WEB3_STACKPOLE_HERO.jpg"
          }
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={
            "https://hbr.org/resources/images/article_assets/2022/04/01-BI_WEB3_STACKPOLE_HERO.jpg"
          }
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={
            "https://hbr.org/resources/images/article_assets/2022/04/01-BI_WEB3_STACKPOLE_HERO.jpg"
          }
        />
      </div>
    </div>
  )
}

export default Hero
