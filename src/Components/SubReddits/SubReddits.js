import React, { useEffect, useContext } from 'react';
import MyContext from '../../Context/MyContext'
import { getSubreddits, getSubredditPosts } from '../../static/FetchReddits';
import './SubReddits.css';

export default function SubReddits() {
    const my_Context = useContext(MyContext);
    const { dispatch, subreddits, activeSubreddit } = my_Context;

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

    // useEffect(() => getSubredditPosts(activeSubreddit)
    // .then(response => {
    //   dispatch({type: 'success', payload: response});
    // }), [activeSubreddit, dispatch]);
  
  const logo = 'https://svgshare.com/i/2SL.svg';

    return (
        <>
            <ul className='subreddits'>
                {subreddits.map(sub => (
                    <li key={sub.id} onClick={() => dispatch({ type: 'activeSubreddit', payload: sub.url })}><img src={sub.icon || logo} onError={(e) => e.target.src= 'src/Images/72ppi/Asset 3.png'}/><button className='link-btn'>{sub.name.toUpperCase()}</button></li>
                ))}
            </ul>
        </>
    )
}
