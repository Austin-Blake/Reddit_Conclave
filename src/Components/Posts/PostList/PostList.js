import React, { useEffect, useContext } from 'react';
import MyContext from '../../../Context/MyContext';
import { getSubredditPosts } from '../../../static/FetchReddits';
import PostFooter from '../PostFooter/PostFooter';

import Votes from '../Votes/Votes';

export const PostList = () => {
    const my_Context = useContext(MyContext);
    const {activeSubreddit, dispatch, isFetched, postData } = my_Context;


    useEffect(() => getSubredditPosts(activeSubreddit)
    .then(response => {
        dispatch({ type: 'success', payload: response });
        
    }), [activeSubreddit, dispatch]);

    console.log('POSTDATA:', postData)
     return (
         <section className='postlist'>
             
                { isFetched ? postData.map(post => (
                    <section
                        className='card'
                        key={post.id}
                        
                    >
                            <Votes
                            upVote={post.ups}
                            awards={post.total_awards_received}
                            className='votes'
                            />
                        <div id={post.id} className='post'>
                            <h1 className='post-title'>{post.title.substring(0, 400)}</h1>
                            <div className='post-title-underline'></div>
                        
                            <p className='post-description'>{post.selftext.substring(0, 400) + (post.selftext.length > 400 ? " [...]" : "")}</p>
                            {post.selftext.length > 400 ? <p>read more...</p> : null}
                            <img src={post.url || new Error()} alt={post.title} onError={(e) => e.target.style.display = "none"}/>
                        </div>
                        <PostFooter
                            postId={post.id}
                            postAuthor={post.author}
                            postCreated={post.created_utc}
                            postPermalink={post.permalink}
                            postComments={post.num_comments}
                            visible={false}
                            className='footer'
                            />
                    </section>
                )) : null
             }
            </section>
    ); 

};

