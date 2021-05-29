import { combineReducers } from "redux";
import postsReducer from './posts/postsReducer';

export default combineReducers({
    postsData: postsReducer
});