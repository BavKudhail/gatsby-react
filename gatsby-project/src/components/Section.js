import React from "react"
import styled from "styled-components"

// styled components
const SectionGroup = styled.div`
  background: url("https://blogger.googleusercontent.com/img/a/AVvXsEgO_LcSgcuoqOjpdL8aQR1suVThIJ4QvnriHiDYWe22WkTW8qZx0psqhCZ-goIzHaePs_7VlbM1c9B4ESD3aQE_9yU88sYvzd2IdSYmkt48NELmvYXcgj26b1BmQ1WKbKmyJnf6KSrUMm9IoXsAPMnzXzP97DQUZv9pTWgVN6TeFZe7m38wGljJGIJT9A=w640-h448");
  height: 720px;
`
const SectionLogo = styled.img`
  width: 300px;
`

const SectionTitleGroup = styled.div``

const SectionTitle = styled.h1`
  color: #fff;
`

const SectionText = styled.p`
  color: #fff;
`

const Section = ({ image, logo, title, text }) => {
  return (
    <SectionGroup image={image}>
      <SectionLogo src={logo} />
      <SectionTitleGroup>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  )
}

export default Section
