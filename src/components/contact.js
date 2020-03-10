import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const ContactContainer = styled.div`
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
    font-size: 30px;
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
const ContactCard = styled.div``
const Icon = styled.div`
  background-color: white;
  width: 40px;
  height: 40px;
  @media only screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const Contact = ({ siteTitle }) => (
  <ContactContainer>
    <h1>CONTACT ME</h1>
    <ContactCard>
      <Icon />
      <h2>LINKEDIN</h2>
      <Icon />
      <h2>GITHUB</h2>
      <Icon />
      <h2>EMAIL</h2>
    </ContactCard>
  </ContactContainer>
)

Contact.propTypes = {
  siteTitle: PropTypes.string,
}

Contact.defaultProps = {
  siteTitle: ``,
}

export default Contact
