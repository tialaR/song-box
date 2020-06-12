import React, { memo, useContext } from 'react';
import { View } from 'react-native';
import AlbumPlayerContext from '../AlbumPlayer/AlbumPlayerContext';
import { Artist, Container, Duration, LeftContent, RigthContent, Song, SoundGif } from './styles';

const SongCard = ({
  song,
  artist,
  duration,
  onPress,
  selectedSong,
  showGif,
}) => {
  const { endSong, setEndSong } = useContext(AlbumPlayerContext);

  return (
    <Container
      selectedSong={selectedSong}
      onPress={() => {
        onPress();
        setEndSong(false);
      }}>
      {selectedSong && showGif && endSong === false && (
        <View style={{ paddingRight: 10 }}>
          <SoundGif />
        </View>
      )}
      <LeftContent>
        <Song>{song}</Song>
        <Artist>{artist}</Artist>
      </LeftContent>
      <RigthContent>
        <Duration>{duration}</Duration>
      </RigthContent>
    </Container>
  );
};

export default memo(SongCard);
