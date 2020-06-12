import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 10px 30px;
  margin: 0 16px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.selectedSong ? colors.lightGray : 'transparent'};
`;

export const SoundGif = styled.Image.attrs({
  source: require('../../assets/soundGif.gif'),
})`
  width: 20px;
  height: 20px;
`;

export const LeftContent = styled.View`
  flex: 1;
`;

export const Song = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.darkGray};
`;

export const Artist = styled.Text`
  padding-top: 6px;
  font-size: 12px;
  color: ${colors.mediumGray};
`;

export const RigthContent = styled.View`
  justify-content: center;
  align-items: center;
  padding-left: 8px;
`;

export const Duration = styled.Text`
  font-size: 12px;
  color: ${colors.darkGray};
`;
