
import './index.css';
import { createStore, handleInitialData } from 'redux'
import { rootReducer } from "./Reducers/rootReducer";
import middleware from "./Middleware";

const store = createStore(rootReducer, middleware);

// handle redux thunk async action creator
store.dispatch(handleInitialData());
store.subscribe(() => { console.log("hello", store.getState()) });

export default store;