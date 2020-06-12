import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles/colors';
import AlbumPlayerContext from '../AlbumPlayer/AlbumPlayerContext';
import { Container, NextButton, PlayButton, PreviousButton } from './styles';

const Player = ({
  onPress,
  playPauseIcon,
  onPressNext,
  onPressPrevious,
  disabledPreviousButton,
  disabledNextButton,
}) => {
  const [play, setPlay] = useState(false);
  const { endSong, setEndSong } = useContext(AlbumPlayerContext);

  return (
    <Container>
      <PreviousButton
        disabled={disabledPreviousButton}
        onPress={() => {
          onPressPrevious();
          setEndSong(false);
        }}>
        <Icon name="skip-previous" size={30} color={colors.black} />
      </PreviousButton>
      <PlayButton
        onPress={() => {
          setPlay(!play);
          onPress(!play);
          setEndSong(false);
        }}>
        <Icon
          name={(!play && !playPauseIcon) || endSong ? 'play-arrow' : 'pause'}
          size={45}
          color={colors.black}
        />
      </PlayButton>
      <NextButton
        disabled={disabledNextButton}
        onPress={() => {
          onPressNext();
          setEndSong(false);
        }}>
        <Icon name="skip-next" size={30} color={colors.black} />
      </NextButton>
    </Container>
  );
};

export default Player;
