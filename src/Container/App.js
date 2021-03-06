import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import { PostList } from '../Presentation/PostList';


const initialState = {
    field: '',
    term: '',
    isFetched: false,
  postData: {},
  success: '',
    error: ''
};
  

  const reducer = (state, action) => {
    switch (action.type) {
      case 'field': {
        return {
          ...state,
          [action.field]: action.value,
        };
      }
      case 'term': {
        return {
          ...state,
          term: action.term,
        };
      }
      case 'success': {
        return {
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
  const { postData, term, isFetched } = state;
  console.log(term)

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
                <h1>Reddit Now Search</h1>
                <label htmlFor="search">What are You looking for?</label>
                <input
                    type="text"
                    value={term}
                    onChange={e => dispatch({
                        type: 'field',
                        field: 'term',
                        value: e.target.value,
                    })
                    } 
                />
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
