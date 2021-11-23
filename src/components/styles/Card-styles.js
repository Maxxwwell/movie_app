/* eslint-disable prettier/prettier */

import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';
// import { Dimensions } from 'react-native';

// const screenSize = Dimensions.get('screen');

export const MovieCard = styled(TouchableOpacity)`
    padding: 5px;
    position: relative;
    `;

export const CardImages = styled(Image)`
    height: 200px;
    width: 140px;
    border-radius: 12px;
`;
