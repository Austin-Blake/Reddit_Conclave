import React, { useState, useEffect } from 'react';
import { getPostComments } from '../../../static/FetchReddits';
import {dateCalculator} from '../../../static/FetchReddits'
import './Comments.css'
export default function Comments(props) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPostComments(props.permalink)
            .then(jsonComments => setComments(
                jsonComments.map(comment => (

                    <div className='post-comment' key={comment.id} id={comment.id}>
                        <div className='comment-details'>
                            <p >{comment.author}</p>
                            <p >{dateCalculator(comment.created_utc)}</p>
                        </div>
                        <p className='comment-body'>{comment.body}</p>
                    </div>

                ))));

    }, [props.permalink]);


    return (
        <div id={props.id} className='comment-container'>
            {comments}
        </div>
    )
}
