import React, { useContext } from 'react';
import MyContext from '../../../Context/MyContext';
import './SearchBar.css';

export default function SearchBar() {
    const my_Context = useContext(MyContext);
    const { term, dispatch, activeSubreddit} = my_Context;

    const search = (e) => {
        // e.preventDefault();
        // axios.get(`https://www.reddit.com/search.json?q=${term || "popular"}`)
        //   .then(response => {
        //     const posts = response.data.children.map(post => post.data);
        //     console.log("post:", posts);
        //     dispatch({ type: 'success', payload: posts });
        //   }).catch(error => {
        //     dispatch({ type: 'error' })
        //   })
    }
    
  return (
    <>
      <header className='page-title'>
        <h1 className='header-title'>REDDIT<span className='header-title-span'>Lite</span></h1>
      </header>
      
    <form className='nav'>
    <div className='search-container'>
      <label htmlFor="search"></label>
      <input
        type="text"
        value={term}
        onChange={e => dispatch({
          type: 'term',
          payload: e.target.value
        })}
            placeholder={'Search in ' + activeSubreddit.substr(3).replace('/', '')}
            className='search-input'
      />
    </div>
    <button className='search-btn' onClick={search}>Search</button>
      </form>
      </>
    )
}
