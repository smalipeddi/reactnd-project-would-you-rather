import React from 'react';
import { connect } from 'react-redux';
import SignIn from './Components/SignIn/SignIn'
import Navigation from './Components/Navigation/Navigation'
import NewQuestion from './Components/NewQuestion/NewQuestion'
import LeaderBoard from './Components/LeaderBoard/LeaderBoard'
import PageNotFound from './Components/PageNotFound/PageNotFound'

import Results from './Components/Results/Results'
import { Route, Routes, Switch } from 'react-router-dom';
import { setAuthedUser, receiveUsers, login, logout } from './redux';

// App.js
export class App extends React.Component {
  render() {
    const { users, authedUser, user } = this.props
    return (
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="add" element={<NewQuestion />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="/home" element={<Results />} />
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
