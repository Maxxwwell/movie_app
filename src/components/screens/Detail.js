/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { getMovieDetails } from '../../services/Services';
import { Loading } from '../styles/Home-styles';
import { DateText, Genre, GenreText, MovieOverview, MovieTitle, PlayButtonPosition, SomeText, StyledContainer, ToggleVideo } from '../styles/Detail-styles';
import { DetailImages } from '../styles/Detail-styles';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import PlayButton from '../PlayButton';
import { Modal, Pressable, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import MediaControls from 'react-native-media-controls';

const Detail = ({ route, navigation }) => {

  const [movieDetail, setMovieDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setmodalVisible] = useState(false);


  const movieId = route.params.movieId;
  const placeholderImage = require('../../assets/images/noimage.png');


  useEffect(() => {
    getMovieDetails(movieId).then(movieData => {
      setMovieDetail(movieData);
      setIsLoading(false);
    });
  }, [movieId]);

  const showVideo = () => {
    setmodalVisible(!modalVisible);
  };

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
            <PlayButtonPosition>
              <PlayButton handlePress={showVideo} />
            </PlayButtonPosition>

            <MovieTitle>{movieDetail.title}</MovieTitle>


            {movieDetail.genres && (<Genre>
              {movieDetail.genres.map(genre => {
                return <GenreText key={genre.id}>{genre.name}</GenreText>;
              })}
            </Genre>)
            }

            <StarRating
              maxStars={5}
              activeOpacity={0}
              disabled={true}
              rating={movieDetail.vote_average / 2}
              fullStarColor={'gold'}
              starSize={25}
            />

            <DateText>{'Release date: ' + dateFormat(movieDetail.release_date, 'mmmm dS, yyyy')}</DateText>

            <MovieOverview>{movieDetail.overview}</MovieOverview>

          </StyledContainer>

        </ScrollView >
      }
      <Modal animationType="slide" visible={modalVisible}>
        <ToggleVideo>
          {/* <Pressable onPress={() => showVideo()}>
            <Text>working</Text>
          </Pressable> */}

          <Video
            source={{
              uri: 'https://vjs.zencdn.net/v/oceans.mp4',
            }}
            controls={true}
            style={styles.backgroundVideo}
          />
        </ToggleVideo>
      </Modal>

    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',

  },
});
