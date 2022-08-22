import React from "react"
import styled from "styled-components"
import Wave from "./Wave"

// styled components
const SectionGroup = styled.div`
  background: url("https://blogger.googleusercontent.com/img/a/AVvXsEgsOHLdu5plKv6SpXJBoyV0KHXH05w5ajZq7ikk8BQjfiD9YvMatn1aqxVJL4cxTjGU1SotFexwONSubqHHEDtOygLdwCOZII814JUFddrWV2v0V4lLuRWFdS7WXtWs4q5fnxbINnTMmcqlJAuZpg0_tSsPNjjbwj1mQu_CeFA-SIM1iglPuBccMxfzOQ=s16000");
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
`
const SectionLogo = styled.img`
  align-self: end;
  margin: 0 auto;
  width: 120px;
`

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100%;
  margin: 0 40px;
  grid-gap: 20px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h1`
  color: #fff;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
`

const SectionText = styled.p`
  color: #fff;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Section = ({ image, logo, title, text }) => {
  return (
    <SectionGroup image={image}>
      <WaveTop>
        <Wave />
      </WaveTop>
      <WaveBottom>
        <Wave />
      </WaveBottom>
      <SectionLogo src={logo} />
      <SectionTitleGroup>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  )
}

export default Section
