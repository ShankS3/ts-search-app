import { PayloadAction } from "@reduxjs/toolkit";

export interface column {
    header: string;
    name: string;
}

export interface data {
    [key: string]: string;
}

export interface PaginationProps {
    page: number;
    pageSize: number;
    handlePagination: (page: number) => void 
}

export type columnArray = column[];

export type dataArray = data[];

export interface FeedFormData {
    page: number;
    searchText: string;
    sortBy: string;
}

export interface FeedResponse {
    data: dataArray;
    pageSize: number;
    totalCount: number
}

export interface FeedData extends FeedResponse, FeedFormData {};

export interface FeedErrorData extends FeedFormData {
    errorMessage: string
};

export interface FeedState extends FeedData {
    loader: boolean;
    error: boolean;
    errorMessage: string;
};

export type FeedPayloadAction = PayloadAction<FeedData | FeedErrorData | undefined>

export interface ApplicationState {
    feed: FeedState
}
