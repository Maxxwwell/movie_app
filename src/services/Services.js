/* eslint-disable prettier/prettier */
import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=f942c6143f31284cc5d352eb8281cf12';

//Popular movies ``
export const getPopularMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
    return resp.data.results;
};
//upcoming movies
export const getUpcomingMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
    return resp.data.results;
};


//upcoming movies
export const getHistoryMovies = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=36`);
    return resp.data.results;
};


//Family TV
export const getCrimeMovies = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=80`);
    return resp.data.results;
};

//Annime
export const getAnimation = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=16`);
    console.log(resp.data.results);
    return resp.data.results;
};

//Annime
export const getMovieDetails = async (id) => {
    const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
    console.log(resp.data.results);
    return resp.data;
};
