import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors } from './colors';

export const HeaderImage = styled.Image.attrs({
  source: require('../assets/box.png'),
  resizeMode: 'contain',
})`
  width: 40px;
  height: 40px;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  font-weight: ${Platform.OS === 'android' ? 'bold' : '900'};
  color: ${colors.black};
  padding-right: 18px;
`;

export const SmallDotDecorator = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: ${colors.black};
`;
