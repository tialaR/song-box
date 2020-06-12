import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

const { width } = Dimensions.get('window');
const pictureWidth = width / 2 - 34;
const pictureHeight = pictureWidth * 1.0;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: ${pictureWidth}px;
  margin-left: 12px;
  margin-right: 12px;
`;

export const ArtistImageContainer = styled.View`
  box-shadow: 0px 5px 10px ${colors.shadow};
  elevation: 10;
  border-radius: 4px;
  background-color: ${colors.lightGray};
`;

export const ArtistImage = styled.Image.attrs({})`
  width: ${pictureWidth}px;
  height: ${pictureHeight}px;
  border-radius: 4px;
  overflow: hidden;
`;

export const ArtistName = styled.Text`
  padding: 10px 5px 0 5px;
  align-self: center;
  font-weight: 700;
  font-size: 14px;
  color: ${colors.darkGray};
`;
