import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Icons from "./FAIcon"

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
    /* display: inline-block; */
    font-family: "Anton", sans-serif;
    font-size: 30px;
    text-align: center;
  }
  a {
    /* display: inline-block; */
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    font-size: 14px;
    color: #9f9f9f;
    text-align: center;
    padding: 3px;
    background-color: #000000;
    transition: all 0.3s ease 0s;

    &:hover {
      color: white;
      background-color: #1e1e1e;
    }
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 76px;
    }
    a {
      font-size: 32px;
    }
  }
`
const ContactCard = styled.div`
  width: 40vw;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Contact = ({ siteTitle }) => (
  <ContactContainer id="Contact">
    <h1>CONTACT ME</h1>
    <ContactCard>
      <a href="https://www.linkedin.com/in/adam-bates-794955198/">
        <Icons name={["fab", "linkedin"]} size="5x" />
        <br />
        LINKEDIN
      </a>
    </ContactCard>

    <ContactCard>
      <a href="https://github.com/Creizai">
        <Icons name={["fab", "github-square"]} size="5x" />
        <br />
        GITHUB
      </a>
    </ContactCard>

    <ContactCard>
      <a href="mailto: 175bates@gmail.com">
        <Icons name={["fas", "envelope-square"]} size="5x" />
        <br />
        EMAIL
      </a>
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
