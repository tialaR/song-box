import React from 'react';
import { ArtistImage, ArtistImageContainer, ArtistName, Container } from './styles';

const ArtistCard = ({ image, name, onPress }) => {
  return (
    <Container onPress={onPress}>
      <ArtistImageContainer>
        <ArtistImage source={{ uri: image }} />
      </ArtistImageContainer>
      <ArtistName>{name}</ArtistName>
    </Container>
  );
};

export default ArtistCard;
