import FeedReducer from 'reducers/FeedReducer';
import * as actions from 'constants/actionTypes';
import { FeedState, FeedData, FeedErrorData } from 'constants/types';

describe('Feed Reducer', () => {
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

    const firstPayload: FeedData = {
        page: 1,
        pageSize: 1,
        searchText: '',
        sortBy: '',
        data: [],
        totalCount: 10,
    };

    const firstState: FeedState = {
        page: 1,
        pageSize: 1,
        searchText: '',
        sortBy: '',
        data: [],
        totalCount: 10,
        loader: false,
        error: false,
        errorMessage: ''
    };

    const errorPayload: FeedErrorData = {
        page: 2,
        searchText: '',
        sortBy: '',
        errorMessage: 'Unable to fetch data'
    }

    it('should handle initialState', () => {
        expect(FeedReducer(undefined, { type: 'unknown', payload: undefined })).toEqual(initialState);
    })

    it('should toggle loader', () => {
        expect(FeedReducer(initialState, {type: actions.ON_FETCH_FEED_DATA_LOADING, payload: undefined}))
        .toEqual(Object.assign({}, initialState, { loader: true}));        
    })

    it('should update feed data', () => {
        expect(FeedReducer(initialState, {type: actions.ON_FETCH_FEED_DATA_SUCCESS, payload: firstPayload})).toEqual(firstState);
    });

    it('should display error', () => {
        expect(FeedReducer(firstState, {type: actions.ON_FETCH_FEED_DATA_FAILURE, payload: errorPayload})).toEqual({
            page: 2,
            pageSize: 1,
            searchText: '',
            sortBy: '',
            data: [],
            totalCount: 10,
            loader: false,
            error: true,
            errorMessage: 'Unable to fetch data'
        })
    });
});
