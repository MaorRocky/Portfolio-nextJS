import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Maor Rocky Portfolio
      </SectionTitle>
      <SectionText>
        iOS developer with a desire to get into the backend field
      </SectionText>
      <Button>My Cv</Button>
    </LeftSection>
  </Section>
);

export default Hero;
