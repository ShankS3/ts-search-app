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

export interface FeedData {
    page: number;
    pageSize: number;
    searchText: string;
    sortBy: string[];
    data: dataArray;
    totalCount: number;
};

export interface FeedErrorData {
    page: number;
    pageSize: number;
    searchText: string;
    sortBy: string[];
    errorMessage: string
};

export interface FeedState extends FeedData {
    loader: boolean;
    error: boolean;
    errorMessage: string;
};
