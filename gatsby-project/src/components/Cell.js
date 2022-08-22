import React from "react"
import styled from "styled-components"

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
`

const CellImage = styled.img`
  width: 60px;
  height: 60px;
  background: #000;
  border-radius: 10px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png");
  background-size: 60px, contain;
  background-repeat: no-repeat;
`

const CellTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`

const Cell = ({ image, title }) => {
  return (
    <CellGroup>
      <CellImage image={image}></CellImage>
      <CellTitle>{title}</CellTitle>
    </CellGroup>
  )
}

export default Cell
