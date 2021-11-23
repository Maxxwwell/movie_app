/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Text, Image, View } from 'react-native';

export const MovieTitle = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

export const GenreText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  margin-top: 5px;
`;

export const Genre = styled(View)`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const DetailImages = styled(Image)`
    height: 460px;
    resize-mode: cover;
`;

export const StyledContainer = styled(View)`
justify-content: center;
alignItems: center;
`;
