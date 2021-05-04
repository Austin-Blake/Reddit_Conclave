import React, { useContext, useEffect } from 'react';
import MyContext from '../../Context/MyContext';
import {getSubreddits} from '../../static/FetchReddits'
import './SubredditDropDwn.css';

export default function SubredditDropDwn() {
    const my_Context = useContext(MyContext);
  const { subreddits, dispatch } = my_Context;
  
  useEffect(() => {
    getSubreddits().then(json => {
      json.forEach(item => dispatch({
        type: 'subreddits', payload: {
          name: item.display_name,
          url: item.url,
          id: item.id,
          icon: item.community_icon.split("?")[0]
        }
      }))
    });
}, [dispatch]);

    return (
        <form className='dropdown'>
          <label className='category-label' htmlFor="SubReddits">Top SubReddit's</label>
  
  <select id="categories" name="categories" onChange={e => dispatch({
    type: 'term',
    payload: e.currentTarget.value
  })}>
    {subreddits.map(sub => {
      return (<option key={sub.id} value={sub.name} onClick={() => dispatch({type: 'activeSubreddit', payload: sub.url})}>{sub.name}</option>)
        
    })}
  </select>  
        </form>
    )
}
