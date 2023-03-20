import { FetchCase } from './fetch.enum'

export type State<T> = {
    data?: T
    error?: Error
    loading?: boolean
}

export type Cache<T> = { [url: string]: T }

// discriminated union type
export type Action<T> =
    | { type: FetchCase.loading }
    | { type: FetchCase.fetched; payload: T }
    | { type: FetchCase.error; payload: Error }

export type Props = {
    url: string
    options?: RequestInit
}
