import { ReactElement } from 'react'

import { loader } from '../utils/loader/loader'

const errorPath = '*'
const searchBarPath = '/'
const searchResultPath = '/items?'
const detailProductPath = '/items/:id'

const ErrorPage = loader('Error')
const DetailProduct = loader('DetailProduct')
const SearchResult = loader('SearchResult')

type route = {
    path: string
    element: ReactElement | undefined
}

const detailProductRoute: route = {
    path: detailProductPath,
    element: <DetailProduct />,
}

const searchBarRoute: route = {
    path: searchBarPath,
    element: undefined,
}

const searchResultRoute: route = {
    path: searchResultPath,
    element: <SearchResult />,
}

const errorRoute: route = {
    path: errorPath,
    element: <ErrorPage />,
}

export const routes = [
    detailProductRoute,
    searchBarRoute,
    searchResultRoute,
    errorRoute,
]
