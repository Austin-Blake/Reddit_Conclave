import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import { PostList } from '../Presentation/PostList';
import '../Presentation/PostList.css';
import './App.css';

const initialState = {
    term: '',
    isFetched: false,
  postData: {},
  success: '',
    error: ''
};

  const reducer = (state, action) => {
    switch (action.type) {
      case 'term': {
        return {
          ...state,
          term: action.payload,
        };
      }
      case 'success': {
        return {
          ...state,
          isFetched: true,
          postData: action.payload,
          error: '',
        };
      }
      case 'error': {
        return {
          ...state,
          error: 'Failed to fetch data',
          isFetched: false,
        };
      }
      default:
        break;
    }
    return state;
  }


const App = () => {
 const [state, dispatch] = useReducer(reducer, initialState);
  const {isFetched, term } = state;

  const search = (e) => {
    e.preventDefault();
    axios.get(`https://www.reddit.com/search.json?q=${term || "popular"}`)
      .then(response => {
        dispatch({ type: 'success', payload: response.data })
      }).catch(error => {
        dispatch({ type: 'error' })
      })
  }

  useEffect((term) => {
    axios.get(`https://www.reddit.com/search.json?q=${term || "popular"}`)
      .then(response => {
        dispatch({ type: 'success', payload: response.data })
      }).catch(error => {
        dispatch({ type: 'error' })
      })
  }, []);
  
  return (
    <>
      <form className='nav'>
        <h1>REDDIT CONCAVE</h1>
        <div className='search-container'>
          <label htmlFor="search">What Are You looking For?</label>
          <input
          type="text"
          value={term}
          onChange={e => dispatch({
            type:'term',
            payload: e.target.value})}
          />
          <label htmlFor="SubReddits">Top SubReddit's</label>
        
          <select id="categories" name="categories" onChange={e => dispatch({
            type:'term',
  payload: e.currentTarget.value
})}>
          <option value=""></option>
          <option value="Humor">Humor</option>
          <option value="Pics">Pictures</option>
          <option value="Entertainment">Entertainment</option>
          <option value="News">News</option>
          </select> 
        </div>
          <button onClick={search}>Search</button>
      </form>
      
      {isFetched ? 
        <PostList
          data={state}
        /> : null
      }
      </>
  );
};

export default App;
