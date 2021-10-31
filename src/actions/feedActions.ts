import { AppDispatch } from 'store/store';
import { FeedResponse, FeedErrorData, FeedFormData, FeedPayloadAction } from 'constants/types';
import * as actions from 'constants/actionTypes';

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
    return async function (useAppDispatch: AppDispatch) {
        useAppDispatch(onFetchFeedsLoading());
        return await fetch(`
            http://localhost:8002/feeds?page=${formData.page}&searchText=${formData.searchText}&sortBy=${formData.sortBy}`
        )
            .then(response => response.json())
            .then(success => useAppDispatch(onFetchFeedsSuccess(success, formData)))
            .catch(error => useAppDispatch(onFetchFeedsError(
                    Object.assign({}, formData, {
                        errorMessage: error?.responseJSON?.detail || 'Any error occured'
                    })
                ))
            );
    }
}
