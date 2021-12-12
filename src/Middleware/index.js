import thunk from 'redux-thunk';
import logger from "./logger";
import {applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'


export default applyMiddleware (
    thunk,
    logger,
    reduxImmutableStateInvariant()
)