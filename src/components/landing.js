import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import selfie from "../images/self_round.png"

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
    margin: 0;
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

const Picture = styled.img`
  height: 140px;
  width: 140px;
  margin: 10px 0;
  /* background-color: white; */
  /* border-radius: 50%; */

  @media only screen and (min-width: 768px) {
    height: 408px;
    width: 408px;
    margin: 25px 0;
  }
`

const Landing = ({ siteTitle }) => (
  <LandingContainer>
    <h1>Hey, I'm Adam!</h1>
    <p>Jr Software Developer</p>
    <p>Washington, D.C.</p>

    <Picture src={selfie} alt="A picture of me, Adam" />
  </LandingContainer>
)

Landing.propTypes = {
  siteTitle: PropTypes.string,
}

Landing.defaultProps = {
  siteTitle: ``,
}

export default Landing
