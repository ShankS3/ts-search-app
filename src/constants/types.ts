export interface column {
    header: string;
    name: string;
}

export interface data {
    [key: string]: string;
}

export type columnArray = column[];

export type dataArray = data[];
