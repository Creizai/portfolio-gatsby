import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const LandingContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: #000000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-bottom: 1px white solid;

  h1 {
    font-family: "Anton", sans-serif;
    font-size: 29px;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: #9f9f9f;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 76px;
    }
    p {
      font-size: 24px;
    }
  }
`
const Picture = styled.image`
  height: 140px;
  width: 140px;
  background-color: white;
  border-radius: 50%;

  @media only screen and (min-width: 768px) {
    height: 408px;
    width: 408px;
  }
`

const Landing = ({ siteTitle }) => (
  <LandingContainer>
    <h1>Hey, I'm Adam!</h1>
    <p>Jr Software Developer</p>
    <Picture></Picture>
  </LandingContainer>
)

Landing.propTypes = {
  siteTitle: PropTypes.string,
}

Landing.defaultProps = {
  siteTitle: ``,
}

export default Landing
