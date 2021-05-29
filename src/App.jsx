import './App.scss';
import HomePage from './pages/Home';
import Search from "./containers/Search/Search";
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
      <HomePage />
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getPosts: fetchPosts
    },
    dispatch
);

export default connect(null, mapDispatchToProps)(App);
