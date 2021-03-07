

export const PostList = (state, isFetched) => {
    
    const data = state.data.postData.data.children;
    
     return (
            <>
                { isFetched ? data.map(post => (
                    <>
                    <div
                        className='card'
                        key={post.data.id}
                    >
                        <h1>{post.data.subreddit.toUpperCase()}</h1>
                        <h2>{ post.data.title}</h2>
                        <a href={ post.data.url}><p>See article</p></a>
                        <img src={post.data.thumbnail} alt="" />
                        <h3>Posted By: {post.data.author}</h3>
                            <h3>{post.data.selftext.substring(0, 200)}</h3>
                    <div>
                        <p>Up Vote: {post.data.ups} / Ratio: {post.data.upvote_ratio}</p>
                        <p>Total Awards: {post.data.total_awards_received}</p>
                    </div>
                    </div>
                    
                    </>
                )) : null
             }
            </>
    ); 

};

