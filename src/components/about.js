import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const AboutContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: #000000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  h1 {
    font-family: "Anton", sans-serif;
    font-size: 32px;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 9px;
    color: #9f9f9f;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 76px;
    }
    p {
      font-size: 16px;
    }
  }
`

const About = ({ siteTitle }) => (
  <AboutContainer>
    <h1>About</h1>
    <p>
      I'm a jr software developer based in Washington, DC. I got into
      development because I have a passion for bringing dreams and design to a
      reality. I've always gotten energized when people talk about a dream they
      have that they are wish they could bring to fruition. Those conversations
      motivated me to start self learning HTML, CSS, and JavaScript. I then made
      the decision to attend General Assembly's Software Immersive Engineering
      program. There I gained experienced with more complex and deeper
      technologies such as React, Python, MongoDB, Express, SQL, Express and
      Django.
    </p>
  </AboutContainer>
)

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default About
