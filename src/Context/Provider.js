import React, { useReducer,useState } from 'react';
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
    const [value, setValue] = useState('');
  const [fullValue, setFullValue] = useState('');
    return (
    <MyContext.Provider value={{
            term: state.term,
            subreddits: state.subreddits,
            activeSubreddit: state.activeSubreddit,
            isFetched: state.isFetched,
            postData: state.postData,
            value: value,
            setValue: setValue,
            fullValue: fullValue,
            setFullValue: setFullValue,
            state,
            dispatch,
        }}>
        {children}
    </MyContext.Provider>
    )
}
