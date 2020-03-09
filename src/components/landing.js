import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const LandingContainer = styled.header`
  background: #000000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    height: 80px;
  }
`
const LandingContainer = styled.header`
  height: 408px;
  width: 408px;
  background-color: white;
`

const Landing = ({ siteTitle }) => (
  <LandingContainer>
    <h1>Hey, I'm Adam!</h1>
    <p></p>
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
