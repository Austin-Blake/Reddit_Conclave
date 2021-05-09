import React, {useState, useRef} from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import './PostFooter.css'
import { dateCalculator } from '../../../static/FetchReddits';
import Comments from '../Comments/Comments';

export default function PostFooter(props) {
    const [active, setActive] = useState(false);
    const titleRef = useRef();

    const onCommentsClicked = () => {
        const postComments = document.getElementById(props.postId);
        if (active) {
            const commentBox = document.querySelector(`.card`).nextElementSibling;
            commentBox.style.display = "none";
            titleRef.current.parentNode.scrollIntoView({ behavior: 'auto', block: "start" });
            setActive(false);
        } else {
            postComments.style.display = "flex";
            
            setActive(true);
        }
    }

    function handleBackClick() {
            titleRef.current.scrollIntoView({ behavior: 'smooth', block: "start" });
    }

    function activateCallBacks() {
        
        handleBackClick();
        onCommentsClicked();

    }

    return (
        <>
            
            <div id={props.postId} className='comment-component'  >
            {active ? <Comments
                permalink={props.postPermalink}
                id={props.postId}
                    visible={props.visible}
                /> : null}
            </div>
            <div className='comment-footer' ref={titleRef}>
                <ul className='comment-list' >
                    <li className='post-author'>Posted By: {props.postAuthor}</li>
                    <li>{dateCalculator(props.postCreated)}</li>
                    <li  onClick={activateCallBacks} ><FaRegCommentDots /> {props.postComments}</li>
                </ul>
            </div>
            
            </>
    )
}
