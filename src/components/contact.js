import React from "react";
import styled from "styled-components";
import Resume from "../images/Resume.pdf";

const ContactDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  height: 60%;
  margin: auto;
  justify-content: center;
`;

const TextDiv = styled.h1`
  width: 60%;
  margin: auto;
  text-align: center;
`;

const ContactForms = styled.div`
  width: 20%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: larger;
  padding: 38px;
`;

const ContactText = styled.a`
  font-size: larger;
  padding: 10px;
  text-decoration: none;
  color: #67eaca;
  &:hover {
    transform: scale(1.1);
  }
`;

function ContactForm() {
  return (
    <ContactDiv>
      <Body>
        <TextDiv>
          Please Feel Free To Contact Me With Any Questions Or Job opportunities
        </TextDiv>
        <ContactForms>
          <ContactText href="mailto:HireJoshHall@gmail.com" target="_blank">
            Send an Email
          </ContactText>

          <ContactText
            href="https://www.linkedin.com/in/josh-hall-657a881b4/"
            target="_blank"
          >
            Connect on LinkedIn
          </ContactText>

          <ContactText href={Resume} target="_blank">
            Resume
          </ContactText>
        </ContactForms>
      </Body>
    </ContactDiv>
  );
}

export default ContactForm;
