import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

const { width } = Dimensions.get('window');
const widthAux = width - 40;

export const Container = styled.View`
  width: ${width}px;
  padding: 20px;
`;

export const SectionTitleTxt = styled.Text`
  font-size: 28px;
  color: ${colors.black};
  text-align: left;
`;
