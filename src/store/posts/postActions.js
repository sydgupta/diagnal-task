import {
    GET_POSTS_LOADING,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    SET_SEARCH_DATA,
    CONCAT_SEARCH_DATA
} from "../../core/constants/action-types";

export function actionPostsPending() {
    return {
        type: GET_POSTS_LOADING,
    };
}

export function actionPostsSuccess(data) {
    return {
        type: GET_POSTS_SUCCESS,
        payload: data,
    };
}

export function actionPostsError(error) {
    return {
        type: GET_POSTS_ERROR,
        payload: error,
    };
}

export function setSearchData(data) {
    return {
        type: SET_SEARCH_DATA,
        payload: data
    }
}

export function concatData(data) {
    return {
        type: CONCAT_SEARCH_DATA,
        payload: data
    }
}