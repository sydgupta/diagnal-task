import { actionPostsSuccess, concatData, setSearchData } from "../store/posts/postActions";
import data1 from '../api/data/CONTENTLISTINGPAGE-PAGE1.json';
import data2 from '../api/data/CONTENTLISTINGPAGE-PAGE2.json';
import data3 from '../api/data/CONTENTLISTINGPAGE-PAGE3.json';

export const fetchPosts = (page, items, maxItems, prevData) => {
    page = parseInt(page);
    // console.log('Data: ', page +' -- '+ items +' -- '+ maxItems);

    let data = data1;

    if(prevData?.length) {
        page = page + 1;
    }

    if(page === 1){
        data = data1;
    }
    else if(page === 2){
        data = data2;
    }
    else if(page === 3){
        data = data3;
    }
    else{
        data = [];
    }

    if(prevData?.length) {

        let postData = data.page['content-items'].content;
        let newData = {
            postData: [...prevData, ...postData],
            pageNumber: page
        }
        return (dispatch) => {
            dispatch(concatData(newData))
        }
    }
    else{
        return (dispatch) => {
            if(data && data.page) {
                dispatch(actionPostsSuccess(data.page));
            }
        };
    }   
}

export const filteredData = (data) => {
    return (dispatch) => {
        dispatch(setSearchData(data))
    }
}