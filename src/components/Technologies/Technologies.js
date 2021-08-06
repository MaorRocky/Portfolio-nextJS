import React from 'react';
import {
  DiDocker,
  DiGithubBadge,
  DiSwift,
  DiReact,
  DiJava,
  DiPython,
  DiNodejs,
  DiApple,
  DiMongodb,
  DiMysql,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Maor,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>list of my preferred technologies</SectionText>
    <List>
      <ListItem>
        <DiSwift size='4rem'/>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>iOS and Flutter</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='4rem'/>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>React</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size='4rem'/>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>NodeJS,Java,Python</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMysql size='4rem'/>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>MySQL,MongoDB</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size='4rem'/>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>GitHub, Docker</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
