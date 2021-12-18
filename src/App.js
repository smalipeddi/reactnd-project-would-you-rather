import React from 'react';
import { connect } from 'react-redux';
import SignIn from './Components/SignIn/SignIn'
import NewQuestion from './Components/NewQuestion/NewQuestion'
import LeaderBoard from './Components/LeaderBoard/LeaderBoard'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import Home from './Components/Home/Home'


import ViewPoll from './Components/ViewPoll/ViewPoll'
import { Route, Routes} from 'react-router-dom';
import { setAuthedUser, receiveUsers, login, logout } from './redux';

// App.js
export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<NewQuestion />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/question/:id" element={<ViewPoll />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  user: state.user,
  users: state.users,
  authedUser: state.authedUser,
  userLoginStatus: state.userLoginStatus,
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = {
  receiveUsers,
  setAuthedUser,
  login,
  logout,

};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
