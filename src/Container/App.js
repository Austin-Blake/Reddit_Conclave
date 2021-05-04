import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import axios from 'axios';
import SubReddits from '../Components/SubReddits/SubReddits'
import { PostList } from '../Components/Posts/PostList/PostList';
import Provider from '../Context/Provider';

import '../Components/Posts/PostList/PostList.css';
import './App.css';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import SearchBar from '../Components/Header/SearchBar/SearchBar';
import SubredditDropDwn from '../Components/SubredditDropDwn/SubredditDropDwn'

  


const App = () => {
  // const my_Context = useContext(MyContext);
  // const {subreddits } = my_Context;

  
  //subreddits.json // 
  // useEffect((term) => {
  //   axios.get(`https://www.reddit.com/subreddits.json`)
  //     .then(response => {
  //       dispatch({ type: 'success', payload: response.data })
  //     }).catch(error => {
  //       dispatch({ type: 'error' })
  //     })
  // }, []);
  
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 640);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

//   return (
//     <div>
//       {isDesktop ? (
//         <div>I show on 1451px or higher</div>
//       ) : (
//         <div>I show on 1450px or lower</div>
//       )}
//     </div>
//   );
// }
  

    // const data = postData.data.children;
    // const dataArray = data.map(post => post.data);

  return (
    <Provider>
      <Router>
        <ScrollToTop/>
        <SearchBar />
        {isDesktop ? null : <SubredditDropDwn/>}
        <main className='main'>
        <Switch>
          <Route path="/" exact component={PostList}/>
          <Route path="/subreddits" exact component={SubReddits}/>
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