import { combineReducers } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';
import FeedReducer from 'reducers/FeedReducer';

const rootReducer = combineReducers({
    feed: FeedReducer,
    router: routerReducer
})

export default rootReducer;
