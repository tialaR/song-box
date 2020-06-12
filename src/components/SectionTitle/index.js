import React from 'react';
import { Container, SectionTitleTxt } from './styles';

const SectionTitle = ({ children }) => {
  return (
    <Container>
      <SectionTitleTxt>{children}</SectionTitleTxt>
    </Container>
  );
};

export default SectionTitle;
