import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const CurrentSongContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 30px 0 30px;
  width: 100%;
`;

export const CurrentSong = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${colors.mediumGray};
`;
