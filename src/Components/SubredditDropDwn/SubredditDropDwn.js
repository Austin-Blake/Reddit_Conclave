import React, { useContext, useEffect } from 'react';
import MyContext from '../../Context/MyContext';
import { getSubreddits, getSubredditPosts } from '../../static/FetchReddits';
import './SubredditDropDwn.css';

export default function SubredditDropDwn() {
  const my_Context = useContext(MyContext);
  const { subreddits, dispatch, activeSubreddit } = my_Context;
  
  useEffect(() => {
    //Get subreddits for choice list
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
    },[dispatch]);

  useEffect(() => {
    //Get Choice list subreddit that was chose
    getSubredditPosts(activeSubreddit)
      .then(response => {
        dispatch({ type: 'success', payload: response });
      })
  }, [activeSubreddit]);
  
  
    return (
        <form className='dropdown'>
          <label className='category-label' htmlFor="SubReddits">Top SubReddit's</label>
  
        <select id="categories" name="categories" onChange={(e) => {
          dispatch({
            type: 'activeSubreddit',
            payload: e.currentTarget.value
          })
        }}>
    {subreddits.map(sub => {
      return (<option key={sub.id} value={sub.url}>{sub.name}</option>)
    })}
        </select>
        </form>
    )
}
