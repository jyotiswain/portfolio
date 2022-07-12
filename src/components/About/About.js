import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://findcareerage.com/assets/images/image07.jpg?v=bc6214d9"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Jyoti Swain</strong>. I am a fourth year student
            doing B.Tech CSE from Lovely Professional University with major in Web Development.
            I have hands on experience in HTML, CSS, JavaScript and familar  with React JS.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
