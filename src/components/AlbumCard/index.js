import React from 'react';
import { SmallDotDecorator } from '../../styles/styles';
import { dateFormaterToYear } from '../../utils/utils';
import { AlbumDescriptionContainer, AlbumImage, AlbumImageContainer, AlbumReleaseDate, AlbumTitle, Artist, Container, DescriptionsContainer } from './styles';

const AlbumCard = ({ album, onPress, artist, index }) => {
  return (
    <Container onPress={onPress}>
      <AlbumImageContainer>
        <AlbumImage source={{ uri: album.cover_medium }} />
      </AlbumImageContainer>
      <AlbumDescriptionContainer>
        <AlbumTitle>{album.title}</AlbumTitle>
        <DescriptionsContainer>
          <SmallDotDecorator />
          <AlbumReleaseDate>
            {dateFormaterToYear(album.release_date)}
          </AlbumReleaseDate>
          <SmallDotDecorator />
          <Artist>{artist}</Artist>
        </DescriptionsContainer>
      </AlbumDescriptionContainer>
    </Container>
  );
};

export default AlbumCard;
