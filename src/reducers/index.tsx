import { combineReducers } from '@reduxjs/toolkit'
import FeedReducer from 'reducers/FeedReducer';

const rootReducer = combineReducers({
    feed: FeedReducer
})

export default rootReducer;
