import React, { useContext, useEffect } from 'react';
import MyContext from '../../../Context/MyContext';
import './SearchBar.css';
import { getSearchResults} from '../../../static/FetchReddits';

export default function SearchBar() {
    const my_Context = useContext(MyContext);
    const {dispatch, activeSubreddit,value, setValue,fullValue,setFullValue} = my_Context;
 
  //get input value, send get req. set postData to new data
  useEffect(() => {
    getSearchResults(fullValue).then(response => {
      dispatch({ type: 'success', payload: response });
      setValue('')
    });
  }, [fullValue]);
    
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
        value={value}
            placeholder={'Search '}
            className='search-input'
            onChange={e => setValue(e.target.value)}
      />
    </div>
        <button className='search-btn' onClick={(e) => {
          e.preventDefault(e); setFullValue(value)//stop refresh and set GET parm
        }}>Search</button>
      </form>
      </>
    )
}

