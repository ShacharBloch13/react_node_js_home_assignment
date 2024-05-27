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
