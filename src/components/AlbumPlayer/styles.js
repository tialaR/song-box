import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

const { width } = Dimensions.get('window');

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  bounces: false,
})`
  flex-grow: 1;
  background-color: ${colors.background};
`;

export const HeaderContainer = styled.View`
  width: ${width}px;
  margin-top: 20px;
`;

export const AlbumTitle = styled.Text`
  font-size: 12px;
  padding: 0 20px;
  color: ${colors.black};
`;
export const Album = styled.Text`
  font-size: 32px;
  font-weight: 600;
  padding-left: 20px;
  color: ${colors.black};
`;
export const DescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 14px 20px 20px 20px;
`;
export const Artist = styled.Text`
  font-size: 16px;
  padding-left: 6px;
  padding-right: 10px;
  color: ${colors.darkGray};
`;
export const AlbumDetail = styled.Text`
  padding-left: 6px;
  padding-right: 10px;
  font-size: 12px;
  color: ${colors.mediumGray};
`;

export const ListContainer = styled.View`
  width: ${width}px;
`;
