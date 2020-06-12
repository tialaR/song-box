import React from 'react';
import { CurrentSong, CurrentSongContainer } from './styles';

const SongDescribe = ({ currentSong, artist }) => {
  return (
    <CurrentSongContainer>
      <CurrentSong>
        {currentSong} - {artist}
      </CurrentSong>
    </CurrentSongContainer>
  );
};

export default SongDescribe;
