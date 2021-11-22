import React, { useEffect, useContext } from 'react';
import MyContext from '../../Context/MyContext'
import { getSubreddits } from '../../static/FetchReddits';
import './SubReddits.css';

export default function SubReddits() {
    const my_Context = useContext(MyContext);
    const { dispatch, subreddits } = my_Context;

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
  
  const logo = 'https://svgshare.com/i/2SL.svg';

    return (
        <>
            <ul className='subreddits'>
                {subreddits.map(sub => (
                  <li key={sub.id} onClick={() => dispatch({ type: 'activeSubreddit', payload: sub.url })}><img src={sub.icon || logo} onError={(e) => e.target.src = 'src/Images/72ppi/Asset 3.png'} alt={sub.name}/><button className='link-btn'>{sub.name.toUpperCase()}</button></li>
                ))}
            </ul>
        </>
    )
}
