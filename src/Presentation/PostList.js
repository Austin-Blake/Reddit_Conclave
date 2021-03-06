

export const PostList = (state, isFetched) => {
    console.log(state)
    console.log(state.data.postData.data.children);
     return (
            <>
                { isFetched ? Array.from(state.data.postData.data.children).map(post => (

                    <div>
                        <h1>{post.data.subreddit.toUpperCase()}</h1>
                        <h2>{ post.data.title}</h2>
                        <a href={ post.data.url}><p>See article</p></a>
                        <img src={post.data.thumbnail} alt="" />
                        <h3>{post.data.author}</h3>
                        <h3>{post.data.selftext}</h3>
                    </div>
                )) : null 
             }
            </>
    ); 

};

