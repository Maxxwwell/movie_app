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
  
  
`;

export const DetailImages = styled(Image)`
    height: 460px;
    resize-mode: cover;
`;

export const StyledContainer = styled(View)`
justify-content: center;
alignItems: center;
padding: 8px;
`;

export const Icon_Date = styled(View)`
flex-direction: row;
alignItems: flex-start;

`;

export const HorizontalSpace = styled(View)`
  width: 100px;
`;

export const DateText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;

export const MovieOverview = styled(Text)`
padding-left: 5px;
padding-right: 5px;
`;
