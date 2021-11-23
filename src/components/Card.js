/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { CardImages, MovieCard } from './styles/Card-styles';


const placeholderImage = require('../assets/images/noimage.png');
const propTypes = {
    item: PropTypes.object,
};

class Card extends React.PureComponent {
    render() {
        const { navigation, item } = this.props;
        return <MovieCard onPress={() => navigation.navigate('Detail')}>

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
