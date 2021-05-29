import React, { useEffect, useState} from 'react';
import searchIcon from '../../assets/images/search.png';
import './Search.scss';
import {connect, useSelector} from 'react-redux';
import {filteredData} from '../../api/posts';
import back from '../../assets/images/Back.png';

const Search = (props) => {
    const postsData = useSelector(state => state.postsData.posts);
    const [posts, setPosts] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [headingStatus, setHeadingStatus] = useState(true);

    useEffect(() => {
      setPosts(postsData);  
    }, [postsData])

    const searchKeyword = (event) => {
        if(event.target.value.length <= 0) {
            props.filteredData([]);
        }
        setInputValue(event.target.value);
    } 

    const setSearchData = () => {

        if(headingStatus) {
            setHeadingStatus(false);
        }

        if(inputValue.length <= 0) {
            props.filteredData([]);
            return;
        };
        let newStateData = posts.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));
        props.filteredData(newStateData);
    }

    // const toggleHeading = () => {
    //     setHeadingStatus(!headingStatus);
    // }

    return (
        <div className="search-bar">
            {headingStatus ? 
            <div className="page-heading">
                <img src={back} alt="" />
                <span>{props.pageTitle}</span>
            </div>            
            : 
            <div className="input-wrapper">
                <input type="text" placeholder="Search ..." onChange={($event) => searchKeyword($event)} />
            </div> 
            }
            <div className="account-info">
                <img src={searchIcon} alt="" onClick={setSearchData} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        pageTitle: state.postsData.pageTitle
    }
}

export default connect(mapStateToProps, {filteredData})(Search);