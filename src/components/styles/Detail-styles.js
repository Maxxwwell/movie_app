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
padding: 5px;
`;

export const HorizontalSpaceLarge = styled(View)`
  flex-direction: row;
  padding-right: ${(props) => props.theme.sizes[2]};
`;

export const DateText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;

export const MovieOverview = styled(Text)`
padding-left: 3px;
padding-right: 3px;
justify-content: center;
`;

export const PlayButtonPosition = styled(View)`
position: absolute;
top: -20px;
right: 15px
background-color: white;
width: 57px;
padding-left: 5px;
padding-right: 5px;
border-radius: 100px;
align-content: center;

`;
