import {
    GET_POSTS_LOADING,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    SET_SEARCH_DATA,
    CONCAT_SEARCH_DATA
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    posts: [],
    pageTitle: null,
    searchData: [],
    totalResults: null,
    requestedPage: null,
    returnedResults: null,
    error: null
};

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload['content-items'].content,
                pageTitle: action.payload?.title,
                totalResults: action.payload['total-content-items'],
                requestedPage: action.payload['page-num-requested'],
                returnedResults: action.payload['page-size-returned']
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SET_SEARCH_DATA:
            return {
                ...state,
                searchData: action.payload,
            };
        case CONCAT_SEARCH_DATA:
            return {
                ...state,
                posts: action.payload.postData,
                requestedPage: action.payload.pageNumber
            };
        default:
            return state;
    }
}