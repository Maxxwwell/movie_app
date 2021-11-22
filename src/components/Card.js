/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const placeholderImage = require('../assets/images/noimage.png');


const MovieCard = styled(TouchableOpacity)`
    padding: 5px;
    position: relative;
    `;

const CardImages = styled(Image)`
    height: 200px;
    width: 140px;
    border-radius: 12px;
    
`;

const propTypes = {
    item: PropTypes.object,
};

class Card extends React.PureComponent {
    render() {
        const { item } = this.props;
        return <MovieCard>
            <CardImages
                resizeMode="cover"
                source={
                    item.poster_path
                        ? { uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }
                        : placeholderImage
                } />
        </MovieCard>;
    }
}

Card.propTypes = propTypes;

export default Card;
