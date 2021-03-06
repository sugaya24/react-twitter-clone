import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/layout';
import { Dashboard } from './components';
import { About, Contact, CreatePost } from './components/pages';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';
import UserProfile from './components/pages/UserProfile';
import UserLikes from './components/pages/UserLikes';
import PostDetail from './components/pages/PostDetail';
import LikedUsers from './components/pages/LikedUsers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/create" component={CreatePost} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signout" component={SignOut} />
          <Route path="/signup" component={SignUp} />
          <Route path="/:slug" exact component={UserProfile} />
          <Route path="/:slug/likes" component={UserLikes} />
          <Route
            path="/:username/status/:postid"
            exact
            component={PostDetail}
          />
          <Route
            path="/:username/status/:postid/likes"
            component={LikedUsers}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
