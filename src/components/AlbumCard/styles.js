import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const AlbumDescriptionContainer = styled.View`
  padding-left: 16px;
  flex: 1;
`;

export const AlbumImageContainer = styled.View`
  box-shadow: 0px 5px 10px ${colors.shadow};
  elevation: 10;
  border-radius: 4px;
  background-color: ${colors.lightGray};
`;

export const AlbumImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
`;

export const AlbumTitle = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: ${colors.darkGray};
`;

export const DescriptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;

export const AlbumReleaseDate = styled.Text`
  padding-right: 14px;
  padding-left: 6px;
  font-size: 14px;
  color: ${colors.darkGray};
`;

export const Artist = styled.Text`
  padding-left: 6px;
  font-size: 12px;
  color: ${colors.mediumGray};
`;
