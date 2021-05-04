import React, { useReducer } from 'react';
import MyContext from './MyContext';
import reducer from './Reducer';

export default function Provider({ children }) {
    const initialState = {
        term: '',
        subreddits: [],
        activeSubreddit: '/r/news/',
        isFetched: false,
        postData: {},
        success: '',
        error: '',
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
    <MyContext.Provider value={{
            term: state.term,
            subreddits: state.subreddits,
            activeSubreddit: state.activeSubreddit,
            isFetched: state.isFetched,
            postData: state.postData,
            state,
            dispatch,
        }}>
        {children}
    </MyContext.Provider>
    )
}
