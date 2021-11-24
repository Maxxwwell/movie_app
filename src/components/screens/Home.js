/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { getUpcomingMovies, getPopularMovies, getHistoryMovies, getCrimeMovies, getAnimation } from '../../services/Services';
import { SliderBox } from 'react-native-image-slider-box';
import List from '../List';
import Error from '../Error';
import { Loading, SlideContainer, Carousel } from '../styles/Home-styles';




const screenSize = Dimensions.get('screen');
export const Home = ({ navigation }) => {
    const [movieImages, setMovieImages] = useState('');
    const [popularMovies, setPopularMovies] = useState('');
    const [historyMovies, setHistoryMoviesData] = useState('');
    const [crimeMovies, setCrimeMovies] = useState('');
    const [anime, setAnime] = useState('');


    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const getMovieData = () => {
        return Promise.all([
            getUpcomingMovies(),
            getPopularMovies(),
            getHistoryMovies(),
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
                historyMoviesData,
                crimeMoviesData,
                animationData,
            ]) => {
                const movieImagesArray = [];
                UpcomingMoviesData.forEach(movie => {
                    movieImagesArray.push('https://image.tmdb.org/t/p/w500' + movie.poster_path);
                });

                setMovieImages(movieImagesArray);
                setPopularMovies(popularMoviesData);
                setHistoryMoviesData(historyMoviesData);
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
                                autoplay={true}
                                circleLoop={true}
                                // eslint-disable-next-line react-native/no-inline-styles
                                dotStyle={{ height: 0 }}
                            />
                        </SlideContainer>

                        <Carousel>
                            <List navigation={navigation} title="Popular Movies" content={popularMovies} />
                        </Carousel>

                        <Carousel>
                            <List navigation={navigation} title="History" content={historyMovies} />
                        </Carousel>

                        <Carousel>
                            <List navigation={navigation} title="Crime" content={crimeMovies} />
                        </Carousel>

                        <Carousel>
                            <List navigation={navigation} title="Animation" content={anime} />
                        </Carousel>
                    </ScrollView>
            }
        </>
    );
};

export default Home;
