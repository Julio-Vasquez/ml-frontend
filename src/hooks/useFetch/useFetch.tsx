import { useEffect, useReducer, useRef } from 'react'
import { getHeader } from '../../utils/api'

import { FetchCase } from './fetch.enum'
import { Action, Cache, Props, State } from './fetch.types.ts'

function useFetch<T = unknown>({ url, options }: Props): State<T> {
    const cache = useRef<Cache<T>>({})
    // Used to prevent state update if the component is unmounted
    const cancelFetch = useRef<boolean>(false)
    const initialState: State<T> = {
        error: undefined,
        data: undefined,
        loading: undefined,
    }

    // state logic separated
    const reducer = (state: State<T>, action: Action<T>): State<T> => {
        switch (action.type) {
            case FetchCase.loading:
                return { ...initialState, loading: true }
            case FetchCase.fetched:
                return { ...initialState, data: action.payload, loading: false }
            case FetchCase.error:
                return { ...initialState, error: action.payload, loading: false }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        cancelFetch.current = false
        // Use Immediately invoked function expression(IIFE), to avoid having
        // to manually call the (void functionName())
        ;(async () => {
            if (!url) return

            dispatch({ type: FetchCase.loading })
            // If a cache exists for this url, return it
            if (cache.current[url]) {
                dispatch({ type: FetchCase.fetched, payload: cache.current[url] })
                return
            }
            try {
                const res = await fetch(url, { ...getHeader(), ...options })

                if (!res.ok) throw new Error(res.statusText)

                const data = (await res.json()) as T
                cache.current[url] = data

                if (cancelFetch.current) return

                dispatch({ type: FetchCase.fetched, payload: data })
            } catch (error) {
                if (cancelFetch.current) return

                dispatch({ type: FetchCase.error, payload: error as Error })
            }
        })()

        //I use the cleanup function to avoid a possible status
        //update after disassembly of the component
        return () => {
            cancelFetch.current = true
        }
    }, [url])

    return state
}

export default useFetch
