import './App.scss';
import { Route, Switch } from "react-router-dom";
import HomePage from './pages/Home';
import Search from "./containers/Search/Search";
// import data from './api/data/CONTENTLISTINGPAGE-PAGE1.json';
// import data2 from './api/data/CONTENTLISTINGPAGE-PAGE2.json';
// import data3 from './api/data/CONTENTLISTINGPAGE-PAGE3.json';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchPosts} from './api/posts';

function App(props) {
  
  const { getPosts } = props;
  useEffect(() => { 
    getPosts(1);
  }, [getPosts])

  return (
    <div className="app-main">
      <div className="search">
        <Search />
      </div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        {/* <Route component={Error} /> */}
      </Switch>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   error: state.postsData.error,
//   posts: state.postsData.posts,
//   loading: state.postsData.loading
// });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getPosts: fetchPosts
    },
    dispatch
);

export default connect(null, mapDispatchToProps)(App);
