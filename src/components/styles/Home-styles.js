/* eslint-disable prettier/prettier */
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import { View } from 'react-native';

export const SlideContainer = styled(View)`
flex: 1;
justify-content: center;
alignItems: center;
`;

export const Carousel = styled(View)`
flex: 1;
justify-content: center;
alignItems: center;
padding-left: 5px;
padding-top: 20px;
`;

export const Loading = styled(ActivityIndicator)`
flex: 1;
justify-content: center;
`;