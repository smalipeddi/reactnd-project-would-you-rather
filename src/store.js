
import './index.css';
import { createStore } from 'redux'
import { rootReducer } from "./Reducers/rootReducer";
import { handleInitialData } from "./Actions/shared"
import middleware from "./Middleware";

const store = createStore(rootReducer, middleware);

// handle redux thunk async action creator
store.dispatch(handleInitialData());
store.subscribe(() => { console.log("hello", store.getState()) });

export default store;