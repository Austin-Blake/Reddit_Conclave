import React, { useReducer } from 'react';
import axios from 'axios';

import { PostList } from '../Presentation/PostList';
import '../Presentation/PostList.css';

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
        console.log(response)
        dispatch({ type: 'success', payload: response.data })
      }).catch(error => {
        dispatch({ type: 'error' })
      })
  }
  
  return (
    <>
      <form >
          <h1>Reddit Concave</h1>
          <label htmlFor="search">What Are You looking For?</label>
          <input
          type="text"
          value={term}
          onChange={e => dispatch({
            type:'term',
            payload: e.target.value})}
        />
         <label for="cars">Top SubReddits</label>
<select id="categories" name="categories" onChange={e => dispatch({
            type:'term',
  payload: e.currentTarget.value
})}>
          <option value="none"></option>
  <option value="Humor">Humor</option>
  <option value="Pics">Pictures</option>
  <option value="Entertainment">Entertainment</option>
  <option value="News">News</option>
</select> 
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
