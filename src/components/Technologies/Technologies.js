import React from 'react';
import {
  DiDocker,
  DiGithubBadge,
  DiSwift,
  DiReact,
  DiJava,
  DiGo,
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
    <SectionText>list of my tech</SectionText>
    <List>
      <ListItem>
        <Maor>
          <DiApple size='4rem' /> <DiSwift size='4rem' />
        </Maor>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>iOS and Flutter</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='4rem' />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Expirience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Maor>
        <DiNodejs size='4rem' /> <DiJava size='4rem' /> <DiGo size='4rem' />
        </Maor>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Node, Java, Go <br />
            Github
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Maor>
          <DiMongodb size='4rem' />
          <DiMysql size='4rem' />
        </Maor>
        <ListContainer>
          <ListTitle>DataBases</ListTitle>
          <ListParagraph>
            MySql <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Maor>
          <DiDocker size='4rem' /> <DiGithubBadge size='4rem' />
        </Maor>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Docker <br />
            Github
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
