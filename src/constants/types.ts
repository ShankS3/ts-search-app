export interface column {
    header: string;
    name: string;
}

export interface data {
    [key: string]: string;
}

export interface PaginationProps {
    page: number,
    pageSize: number,
    handlePagination: (page: number) => void 
}


export type columnArray = column[];

export type dataArray = data[];
