import * as actions from 'constants/actionTypes';
import { FeedState, FeedPayloadAction } from 'constants/types';

const initialState: FeedState = {
    page: 1,
    pageSize: 1,
    searchText: '',
    sortBy: '',
    data: [],
    totalCount: 0,
    loader: false,
    error: false,
    errorMessage: ''
};

const FeedReducer = (state: FeedState = initialState, action: FeedPayloadAction): FeedState => {
    switch(action.type) {
        case actions.ON_FETCH_FEED_DATA_LOADING:
            return Object.assign({}, state, { loader: true });
        case actions.ON_FETCH_FEED_DATA_SUCCESS:
            return Object.assign({}, state, {
                ...action.payload,
                loader: false
            });
        case actions.ON_FETCH_FEED_DATA_FAILURE:
            return Object.assign({}, state, {
                ...action.payload,
                data: [],
                loader: false,
                error: true
            })
        default:
            return state;
    }
};

export default FeedReducer;
