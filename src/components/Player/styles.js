import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 20px 0 20px 0;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.white};
  box-shadow: 0px 5px 10px ${colors.shadow};
  elevation: 10;
  margin: 0 20px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const PreviousButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.white};
  box-shadow: 0px 5px 10px ${colors.shadow};
  elevation: 10;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const NextButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.white};
  box-shadow: 0px 5px 10px ${colors.shadow};
  elevation: 10;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
