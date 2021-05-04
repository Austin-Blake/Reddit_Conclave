 const reducer = (state, action) => {
    switch (action.type) {
      case 'term': {
        return {
          ...state,
          term: action.payload,
        };
      }
      case 'subreddits': {
        return {
          ...state,
          subreddits: state.subreddits.concat(action.payload),
        }
      }
        case 'activeSubreddit':{
        return {
          ...state,
          activeSubreddit: action.payload,
          }
}      case 'success': {
        return {
          ...state,
          isFetched: true,
          postData: action.payload,
          error: '',
        };
      }
      case 'error': {
        return {
          ...state,
          error: 'Failed to fetch data',
          isFetched: false,
        };
      }
      default:
        break;
    }
    return state;
}
  
export default reducer;