import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

const discoImage = '../../assets/disco1.png';

export const ImageContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const AlbumImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 180px;
  height: 180px;
  elevation: 10;
  border-radius: 4px;
  z-index: 4;
  overflow: hidden;
`;
const AlbumContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px ${colors.shadow};
  elevation: 10;
  z-index: 4;
  position: absolute;
  overflow: visible;
  background-color: ${colors.lightGray};
`;
export const StyledAnimatedAlbum = Animated.createAnimatedComponent(
  AlbumContainer,
);

const DiscoImageContainer = styled.View``;
export const StyledAnimatedDiscoImageContainer = Animated.createAnimatedComponent(
  DiscoImageContainer,
);

export const DiscoImage = styled.ImageBackground.attrs({
  resizeMode: 'contain',
  source: require(discoImage),
})`
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

export const DiscoArtistImage = styled.ImageBackground.attrs({
  resizeMode: 'contain',
})`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
`;
