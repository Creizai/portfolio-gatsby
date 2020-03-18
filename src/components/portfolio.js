import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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

  h1 {
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
    h1 {
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

const Picture = styled.image`
  display: hidden;
  height: 139px;
  width: 278px;
  background-color: white;

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
      <h1>Trivia</h1>
      <Picture></Picture>
      <p>HTML, JavaScript, CSS</p>
    </ProjectContainer>
    {/* <ProjectContainer>
      <h1>Hey, I'm Adam!</h1>
      <Picture></Picture>
      <p>Jr Software Developer</p>
    </ProjectContainer>
    <ProjectContainer>
      <h1>Modern T</h1>
      <Picture></Picture>
      <p>Jr Software Developer</p>
    </ProjectContainer> */}
  </PortfolioContainer>
)

Portfolio.propTypes = {
  siteTitle: PropTypes.string,
}

Portfolio.defaultProps = {
  siteTitle: ``,
}

export default Portfolio
