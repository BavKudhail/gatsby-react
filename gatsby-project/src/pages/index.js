import * as React from "react"
import { Link } from "gatsby"
import { About, Contact, Header, Hero, Projects, Section } from "../components"
import Featured from "../components/Sections/Featured/Featured"
import staticData from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }
`

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
    <SectionCaption>Project Archive</SectionCaption>
    <SectionCellGroup>
      {staticData.cells.map(cell => {
        return <Cell title={cell.title} image={cell.image} />
      })}
    </SectionCellGroup>
    <Featured />
    <Projects />
    <Contact />
  </>
)

export default IndexPage
