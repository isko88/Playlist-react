import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { playlistReducer, songReducer } from '../reducers';


export const rootReducer = combineReducers({
 song:songReducer,
 playlist:playlistReducer
})
export const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        thunk
    )
);