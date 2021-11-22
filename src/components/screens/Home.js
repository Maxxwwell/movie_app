/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Dimensions, ScrollView, Text } from 'react-native';
import { getUpcomingMovies, getPopularMovies, getPopularTvSeries, getCrimeMovies, getAnimation } from '../../services/Services';
import { SliderBox } from 'react-native-image-slider-box';
import styled from 'styled-components';
import List from '../List';
import Error from '../Error';

const SlideContainer = styled(View)`
    flex: 1;
    justify-content: center;
    alignItems: center;
`;

const Carousel = styled(View)`
    flex: 1;
    justify-content: center;
    alignItems: center;
    padding-left: 5px;
    padding-top: 20px;
`;

const Loading = styled(ActivityIndicator)`
    flex: 1;
    justify-content: center;
`;


const screenSize = Dimensions.get('screen');
export const Home = () => {
    const [movieImages, setMovieImages] = useState('');
    const [popularMovies, setPopularMovies] = useState('');
    const [popularTVseries, setPopularTVseries] = useState('');
    const [crimeMovies, setCrimeMovies] = useState('');
    const [anime, setAnime] = useState('');


    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const getMovieData = () => {
        return Promise.all([
            getUpcomingMovies(),
            getPopularMovies(),
            getPopularTvSeries(),
            getCrimeMovies(),
            getAnimation(),
        ]);
    };

    /////////////////////////////////////////////
    useEffect(() => {
        getMovieData().then(
            ([
                UpcomingMoviesData,
                popularMoviesData,
                popularTvSeriesData,
                crimeMoviesData,
                animationData,
            ]) => {
                const movieImagesArray = [];
                UpcomingMoviesData.forEach(movie => {
                    movieImagesArray.push('https://image.tmdb.org/t/p/w500' + movie.poster_path);
                });

                setMovieImages(movieImagesArray);
                setPopularMovies(popularMoviesData);
                setPopularTVseries(popularTvSeriesData);
                setCrimeMovies(crimeMoviesData);
                setAnime(animationData);
                // setIsLoading(false);
            },
        ).catch(() => {
            setError(true);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);
    //////////////////////////////////////////
    return (
        <>
            {/* {error ? <Error /> : console.log(<Text>no error</Text>)} */}
            {
                isLoading
                    ? <Loading size="large" color="#002060" />
                    : <ScrollView>

                        <SlideContainer>
                            <SliderBox
                                images={movieImages}
                                sliderBoxHeight={screenSize.height * 0.7}
                                parentWidth={screenSize.width}
                                autoplay={false}
                                circleLoop={true}
                                // eslint-disable-next-line react-native/no-inline-styles
                                dotStyle={{ height: 0 }}
                            />
                        </SlideContainer>

                        <Carousel>
                            <List title="Popular Movies" content={popularMovies} />
                        </Carousel>

                        <Carousel>
                            <List title="Popular TV Shows" content={popularTVseries} />
                        </Carousel>

                        <Carousel>
                            <List title="Crime" content={crimeMovies} />
                        </Carousel>

                        <Carousel>
                            <List title="Animation" content={anime} />
                        </Carousel>
                    </ScrollView>
            }






        </>
    );
};

export default Home;
