/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { getMovieDetails } from '../../services/Services';
import { Loading } from '../styles/Home-styles';
import { Genre, GenreText, MovieTitle, StyledContainer } from '../styles/Detail-styles';
import { DetailImages } from '../styles/Detail-styles';
import { Text } from 'react-native';
import StarRating from 'react-native-star-rating';

const Detail = ({ route, navigation }) => {

  const [movieDetail, setMovieDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const movieId = route.params.movieId;
  const placeholderImage = require('../../assets/images/noimage.png');


  useEffect(() => {
    getMovieDetails(movieId).then(movieData => {
      setMovieDetail(movieData);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <>
      {isLoading ? <Loading size="large" color="#002060" />
        : <ScrollView >

          <DetailImages
            resizeMode="cover"
            source={
              movieDetail.poster_path
                ? { uri: 'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path }
                : placeholderImage
            } />

          <StyledContainer>

            <MovieTitle>{movieDetail.title}</MovieTitle>


            {movieDetail.genres && (<Genre>
              {movieDetail.genres.map(genre => {
                return <GenreText key={genre.id}>{genre.name}</GenreText>;
              })}
            </Genre>)
            }
            <StarRating
              maxStars={5}
              disabled={true}
              rating={movieDetail.vote_average/2}
              fullStarColor={'gold'}
              starSize={20}
              halfStarEnabled={true}
              />

          </StyledContainer>

        </ScrollView >
      }
    </>
  );
};

export default Detail;
