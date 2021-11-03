import { AppDispatch } from 'store/store';
import { FeedResponse, FeedErrorData, FeedFormData, FeedPayloadAction } from 'constants/types';
import * as actions from 'constants/actionTypes';

const base_url: string = 'http://localhost:5001/api/v1';

function onFetchFeedsLoading (): FeedPayloadAction {
    return {
        type: actions.ON_FETCH_FEED_DATA_LOADING,
        payload: undefined
    }
}

function onFetchFeedsSuccess (responseData: FeedResponse, formData: FeedFormData): FeedPayloadAction {
    return {
        type: actions.ON_FETCH_FEED_DATA_SUCCESS,
        payload: Object.assign({}, responseData, formData)
    }
}

function onFetchFeedsError (errorData: FeedErrorData): FeedPayloadAction {
    return {
        type: actions.ON_FETCH_FEED_DATA_FAILURE,
        payload: errorData
    }
}

export function onFetchFeeds (formData: FeedFormData) {
    return function (useAppDispatch: AppDispatch) {
        useAppDispatch(onFetchFeedsLoading());
        return fetch(`
            ${base_url}/feeds?page=${formData.page}&searchText=${formData.searchText}&sortBy=${formData.sortBy}`
        )
        .then((response) => {
            if(!response.ok) throw new Error(response.statusText);
            else return response.json();
        })
        .then((success) => useAppDispatch(onFetchFeedsSuccess(success, formData)))
        .catch((error) => {
            useAppDispatch(onFetchFeedsError(
                Object.assign({}, formData, {
                    errorMessage: error.message || 'An error occurred'
                })
            ))
        }
        );
    }
}
