import React from 'react';
import { VscArrowUp } from 'react-icons/vsc';
import { FaAward} from 'react-icons/fa';
import './Votes.css'
export default function Votes(props) {
    return (
        <div className='stats'>
            <ul className='arrow'>
                <li className='upArrow'><VscArrowUp /></li>
                <li>{props.upVote}</li>
                <li>UpVotes</li>
            </ul>
            <ul className='award'>
                <li><FaAward /></li>
                <li>{props.awards}</li>
            </ul>
        </div>
    )
}
