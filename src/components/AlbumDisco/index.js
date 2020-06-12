import React, { memo, useContext, useEffect } from 'react';
import { Animated, Dimensions, Easing } from 'react-native';
import AlbumPlayerContext from '../AlbumPlayer/AlbumPlayerContext';
import { AlbumImage, DiscoArtistImage, DiscoImage, ImageContainer, StyledAnimatedAlbum, StyledAnimatedDiscoImageContainer } from './styles';

const AlbumDisco = ({ albumImage, play, selectedSong }) => {
  const { setEndSong } = useContext(AlbumPlayerContext);

  const rotateDisco = new Animated.Value(0);
  const moveAlbum = new Animated.Value(0);
  const moveDisco = new Animated.Value(0);

  const { width } = Dimensions.get('window');
  const startAlbumPosition = width * 0;
  const endAlbumPosition = width * -0.12;
  const startDiscoPosition = width * 0;
  const endDiscoPosition = width * 0.14;

  useEffect(() => {
    if (play) {
      animateMoveAlbum();
      animateMoveDisco();
      animateRotateDisco(play);
    }
  }, [play, selectedSong]);

  function animateRotateDisco(play) {
    setEndSong(false);
    if (play) {
      Animated.timing(rotateDisco, {
        toValue: 1,
        duration: 34000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start(() => {
        setEndSong(true);
      });
    }
  }

  function animateMoveAlbum() {
    Animated.spring(moveAlbum, {
      toValue: 1,
      speed: 12,
      useNativeDriver: true,
      bounciness: 20,
    }).start();
  }

  function animateMoveDisco() {
    Animated.spring(moveDisco, {
      toValue: 1,
      speed: 12,
      useNativeDriver: true,
      bounciness: 20,
    }).start();
  }

  const rotate = rotateDisco.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const animateAlbum = moveAlbum.interpolate({
    inputRange: [0, 1],
    outputRange: [startAlbumPosition, endAlbumPosition],
  });
  const animatedDisco = moveDisco.interpolate({
    inputRange: [0, 1],
    outputRange: [startDiscoPosition, endDiscoPosition],
  });

  return (
    <ImageContainer>
      <StyledAnimatedAlbum
        style={{ transform: [{ translateX: animateAlbum }] }}>
        <AlbumImage source={{ uri: albumImage }} />
      </StyledAnimatedAlbum>
      <StyledAnimatedDiscoImageContainer
        style={{
          transform: [{ translateX: animatedDisco }, { rotate: rotate }],
        }}>
        <DiscoImage>
          <DiscoArtistImage source={{ uri: albumImage }} />
        </DiscoImage>
      </StyledAnimatedDiscoImageContainer>
    </ImageContainer>
  );
};

export default memo(AlbumDisco);
