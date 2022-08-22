import React from "react"
import "./Projects.css"
import Card from "../../Card/Card"

const Projects = () => {
  return (
    <>
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
    </>
  )
}

export default Projects
