import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Nav = styled.header`
  width: 100vw;
  position: fixed;
  background: #1e1e1e;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    height: 80px;
  }
`

const Title = styled.div`
  font-family: "Anton", sans-serif;
  display: none;

  @media only screen and (min-width: 768px) {
    margin: 0 1.5rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`
const NavLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    margin: 0 1.5rem;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
  }
`

const TitleLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  transition: all 0.3s ease 0s;
  padding: 3px 5px;
`

const StyledLink = styled(Link)`
  font-family: "Anton", sans-serif;
  font-size: 24px;
  text-decoration: none;
  color: white;
  padding: 3px 0;
  background-color: #1e1e1e;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: blue;
  }

  @media only screen and (min-width: 768px) {
    padding: 3px 5px;
  }
`

const StyledA = styled.a`
  font-family: "Anton", sans-serif;
  font-size: 24px;
  text-decoration: none;
  color: white;
  padding: 3px 0;
  background-color: #1e1e1e;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: grey;
  }

  @media only screen and (min-width: 768px) {
    padding: 3px 5px;
  }
`

const Header = ({ siteTitle }) => (
  <Nav>
    <Title>
      <TitleLink to="/">ADAM BATES</TitleLink>
      {/* put this in the above link{siteTitle} */}
    </Title>
    <NavLinks>
      <StyledA href="#About">About</StyledA>
      <StyledA href="#Portfolio">Portfolio</StyledA>
      <StyledA href="https://tinyurl.com/wg5chft">Resume</StyledA>
      <StyledA href="#Contact">Contact</StyledA>
    </NavLinks>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
