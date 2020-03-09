import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Nav = styled.header`
  max-width: 960px;
  margin: 0 auto;
  background: #1e1e1e;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-space-between;
  }
`

const Title = styled.div`
  font-family: "Anton", sans-serif;
  font-size: 36px;
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`
const NavLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const StyledLink = styled(Link)`
  font-family: "Anton", sans-serif;
  font-size: 24px;
  text-decoration: none;
  margin: 0 auto;
  color: white;
  padding: 3px 0;
  background-color: #1e1e1e;
  transition: all 0.3s ease 0s;

  &:hover {
    color: blue;
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-evenly;
  }
`

const Header = ({ siteTitle }) => (
  <Nav>
    <Title>
      <StyledLink to="/">Adam Bates</StyledLink>
      {/* put this in the above link{siteTitle} */}
    </Title>
    <NavLinks>
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/">Portfolio</StyledLink>
      <StyledLink to="/">Resume</StyledLink>
      <StyledLink to="/">Contact</StyledLink>
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
