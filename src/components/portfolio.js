import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Trivia from "../images/trivia.png"

const PortfolioContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: #000000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-bottom: 1px solid white;

  a {
    display: block;
    color: white;
    text-decoration: none;
    font-family: "Anton", sans-serif;
    font-size: 32px;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: #9f9f9f;
  }

  @media only screen and (min-width: 1080px) {
    flex-direction: row;
    margin: 0 auto;
    a {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
  }
`

const ProjectContainer = styled.div`
  margin: 5px;
`

const Picture = styled.img`
  /* position: absolute; */
  display: none;
  height: 139px;
  width: 278px;
  background-color: darkgrey;

  @media only screen and (min-width: 768px) {
    display: block;
  }
  @media only screen and (min-width: 1080px) {
    /* height: 270px;
    width: 540px; */
  }
`

const Portfolio = ({ siteTitle }) => (
  <PortfolioContainer id="Portfolio">
    <ProjectContainer>
      <a href="https://creizai.github.io/Firefly-Trivia/">
        Trivia
        <Picture src={Trivia} />
      </a>
      <p>HTML, JavaScript, CSS</p>
    </ProjectContainer>
    <ProjectContainer>
      <a>Check Back Daily</a>
      <Picture></Picture>
      <p>Projects Will Be Added Soon</p>
    </ProjectContainer>
    {/* <ProjectContainer>
      <h1>Modern T</h1>
      <Picture></Picture>
      <p>Jr Software Developer</p>
    </ProjectContainer>  */}
  </PortfolioContainer>
)

Portfolio.propTypes = {
  siteTitle: PropTypes.string,
}

Portfolio.defaultProps = {
  siteTitle: ``,
}

export default Portfolio
