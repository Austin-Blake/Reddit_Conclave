import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SubReddits from '../Components/SubReddits/SubReddits'
import { PostList } from '../Components/Posts/PostList/PostList';
import Provider from '../Context/Provider';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import SearchBar from '../Components/Header/SearchBar/SearchBar';
import SubredditDropDwn from '../Components/SubredditDropDwn/SubredditDropDwn'
import '../Components/Posts/PostList/PostList.css';
import './App.css';



const App = () => {

const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

const updateMedia = () => {
  setDesktop(window.innerWidth > 640);
};

useEffect(() => {
  window.addEventListener("resize", updateMedia);
  return () => window.removeEventListener("resize", updateMedia);
});

return (
  <Provider>
    <Router>
      <ScrollToTop/>
      <SearchBar />
      {isDesktop ? null : <SubredditDropDwn/>}
      <main className='main'>
      <Switch>
        <Route path="/" exact component={PostList}/>
          <Route path="/subreddits" exact component={SubReddits} />
        </Switch>
        {isDesktop ? (
          <SubReddits />
    ) : null
      }
        
      </main>
    </Router>
  </Provider>
);
};

export default App;
    


// {isFetched ?
//   <>
//   <PostList
//     data={state}
//     /><SubReddits data={state}/> </>: null
// }