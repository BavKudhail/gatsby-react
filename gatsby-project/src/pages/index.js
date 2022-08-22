import * as React from "react"
import { Link } from "gatsby"
import { About, Contact, Header, Hero, Projects, Section } from "../components"
import Featured from "../components/Sections/Featured/Featured"

const IndexPage = () => (
  <>
    <Header />
    <Hero />
    <Section
      text="This is going to be some basic text ahd ddsds sds dsdsd sdsd sdsd dsds sds dssd dsds dsds dsds dsds"
      title="React For Designers"
      logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
      image="https://blogger.googleusercontent.com/img/a/AVvXsEgO_LcSgcuoqOjpdL8aQR1suVThIJ4QvnriHiDYWe22WkTW8qZx0psqhCZ-goIzHaePs_7VlbM1c9B4ESD3aQE_9yU88sYvzd2IdSYmkt48NELmvYXcgj26b1BmQ1WKbKmyJnf6KSrUMm9IoXsAPMnzXzP97DQUZv9pTWgVN6TeFZe7m38wGljJGIJT9A=w640-h448"
    />
    <Featured />
    <Projects />
    <Contact />
  </>
)

export default IndexPage
