import Post from "../components/post/Post";
import { connect } from "react-redux";
import InfiniteScroll from 'react-infinite-scroller';
import { useState } from "react";
import {fetchPosts} from '../api/posts';

const HomePage = (props) => {
    const [haveMorePosts, setHaveMorePosts] = useState(true);

    let searchedPosts = props.posts;

    if(props.searchData.length) {
        searchedPosts = props.searchData;
    }

    function fetchMoreData() {
        let dataLength = props?.posts?.length;
        if(props.searchData?.length) {
            return;
        }
        if(dataLength >= props.totalResults) {
            setHaveMorePosts(false);
            return;
        }
        props.fetchPosts(props.requestedPage, dataLength, props.returnedResults, props.posts);
    }
    return (
        <div className="homepage">
            <InfiniteScroll
                loadMore={fetchMoreData}
                hasMore={haveMorePosts}
                loader={<div key={0} className="loader"> Loading... </div>}
                useWindow={false}
                className="posts-wrapper"
            >
                {searchedPosts.map((item, index) => <Post data={item} key={index} />)}{" "}
            </InfiniteScroll>
        </div>
    );
}

const mapStateToProps = (state) => ({
  error: state.postsData.error,
  posts: state.postsData.posts,
  searchData: state.postsData.searchData,
  totalResults: state.postsData.totalResults,
  returnedResults: state.postsData.returnedResults,
  requestedPage: state.postsData.requestedPage
});

export default connect(mapStateToProps, {fetchPosts})(HomePage);