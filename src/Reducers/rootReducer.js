import { combineReducers } from 'redux';
import login from './loginReducer';
import users from "./usersReducer";
import authedUser from "./AuthedUserReducer";

export const rootReducer = combineReducers({
  login: login,
  users: users,
  authedUser: authedUser
});

export default rootReducer;