export type FetchApiOptions = { 
    url?: string; 
    tags?: Array<string>;
    location?: string; 
    requestInit?: { cache?: RequestCache } & RequestInit;
} & Partial<FetchApiRetriesOptions>;

export type FetchApiRetriesOptions = {
    retries: number; 
    everyMs: number; 
}

export type FetchResponse<T> = {
    data: T | null;
    headers: Headers;
};

