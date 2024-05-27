import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE, SET_CATEGORY } from '../actions';

const initialState = {
    images: [],
    category: 'flowers',
    error: null
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGES_SUCCESS:
            return { ...state, images: action.payload };
        case FETCH_IMAGES_FAILURE:
            return { ...state, error: action.payload };
        case SET_CATEGORY:
            return { ...state, category: action.payload };
        default:
            return state;
    }
};

export default imageReducer;
