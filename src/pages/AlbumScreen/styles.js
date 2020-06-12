import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const HeaderImage = styled.Image.attrs({
  source: require('../../assets/box.png'),
  resizeMode: 'contain',
})`
  width: 50px;
  height: 50px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${colors.background};
  box-shadow: 0px 5px 10px ${colors.shadow};
  elevation: 10;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  font-weight: ${Platform.OS === 'android' ? 'bold' : '900'};
  color: ${colors.black};
  padding-right: 18px;
`;
