import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:054-2322730'>054-2322730</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mialto:maorrocky@gmail.com'>
            maorrocky@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <SocialIcons href='https://github.com/MaorRocky'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/maor-rocky-5b95a185/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
