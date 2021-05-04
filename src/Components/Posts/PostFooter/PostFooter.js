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
           const commentBox = document.querySelector(`.card:nth-child(3)`)
            commentBox.style.display = "none";
            setActive(false);
        } else {
            postComments.style.display = "block";
            console.log(postComments)
            setActive(true);
        }
    }

    function handleBackClick() {
        titleRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    function activateCallBacks() {
        onCommentsClicked();
        handleBackClick()
    }

    return (
        <>
            <div className='comment-footer'>
                <ul className='comment-list'>
                    <li className='post-author'>Posted By: {props.postAuthor}</li>
                    <li>{dateCalculator(props.postCreated)}</li>
                    <li ref={titleRef} onClick={activateCallBacks} ><FaRegCommentDots /> {props.postComments}</li>
                </ul>
        </div>
            {active ? <Comments
                permalink={props.postPermalink}
                id={props.postId}
                visible={props.visible}
            /> : null}
            </>
    )
}
