import { FetchApiRetriesOptions } from "../models/fetch";

export const FETCH_API_DEFAULT_PARAMS: FetchApiRetriesOptions = {
    retries: 30,
    everyMs: 1500
};

export const FETCH_API_PER_PAGE_DEFAULT = 50;
