import axios from 'axios';



const API_KEY = '25540812-faf2b76d586c1787d2dd02736';

export const fetchImages = (category) => {
    return axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${category}`);
};
