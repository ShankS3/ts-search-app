import fetchMock from 'fetch-mock';

import { mockStore } from 'store/mockStore';
import * as actions from  'actions/feedActions';
import * as actionTypes from 'constants/actionTypes';
import { FeedFormData, FeedPayloadAction, FeedData, FeedResponse, FeedState } from 'constants/types';

describe('feeds action', () => {

    afterEach(() => {
        fetchMock.restore();
    })

    it('should fetch feeds', () => {
        const initialState: FeedState = {
            page: 1,
            pageSize: 1,
            data: [],
            totalCount: 0,
            searchText: '',
            sortBy: '',
            loader: false,
            error: false,
            errorMessage: ''
        }

        const formData: FeedFormData = {
            page: 1,
            searchText: '',
            sortBy: ''
        }

        const response: FeedResponse = {
            pageSize: 1,
            data: [],
            totalCount: 0,
        }

        const payload: FeedData = {...formData, ...response}

        const expected : FeedPayloadAction[] =  [
            { type: actionTypes.ON_FETCH_FEED_DATA_LOADING, payload: undefined },
            { 
                type: actionTypes.ON_FETCH_FEED_DATA_SUCCESS, 
                payload
            }
        ]
        
        fetchMock.get(`/feeds?page=${formData.page}&searchText=${formData.searchText}&sortBy=${formData.sortBy}`, {
            body: response
        })

        const feedStore = mockStore({ feed: initialState });

        expect(typeof actions.onFetchFeeds(formData)).toEqual('function');

        return feedStore.dispatch(actions.onFetchFeeds(formData)).then(() => {
            expect(feedStore.getActions()).toEqual(expected);

        });
    })
});
