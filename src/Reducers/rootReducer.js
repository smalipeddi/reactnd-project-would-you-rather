import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import users from "./userReducer";
import authedUser from "./AuthedUserReducer";

export const rootReducer = combineReducers({
  loginReducer: loginReducer,
  userReducer: users,
  authedUserReducer: authedUser
});

export default rootReducer;