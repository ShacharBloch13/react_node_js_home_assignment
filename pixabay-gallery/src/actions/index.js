/**
 * `src/actions/index.js`
 * 
 * This file contains Redux action creators for fetching images from the backend server and 
 * setting the category for image search. It includes actions for successfully fetching images,
 * handling fetch failures, and setting the image category. The fetchImages action creator 
 * makes an API call to the backend server to retrieve images based on the specified category 
 * and page number.
 */

import axios from 'axios';

export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';
export const SET_CATEGORY = 'SET_CATEGORY';

export const fetchImages = (category, page = 1) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/images`, {
            params: { category, page }
        });
        dispatch({ type: FETCH_IMAGES_SUCCESS, payload: response.data.hits });
    } catch (error) {
        dispatch({ type: FETCH_IMAGES_FAILURE, payload: error });
    }
};

export const setCategory = (category) => {
    return { type: SET_CATEGORY, payload: category };
};