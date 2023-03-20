import { lazy, ReactElement } from 'react'

const errorPath = '*'
const searchBarPath = '/'
const searchResultPath = '/items?'
const detailProductPath = '/items/:id'

const DetailProduct = lazy(() => import('./../views/DetailProduct'))
const SearchBar = lazy(() => import('./../views/SearchBar'))
const SearchResult = lazy(() => import('./../views/SearchResult'))
const ErrorPage = lazy(() => import('./../views/Error'))

type route = {
    path: string
    element: ReactElement
}

const detailProductRoute: route = {
    path: detailProductPath,
    element: <DetailProduct />,
}

const searchBarRoute: route = {
    path: searchBarPath,
    element: <SearchBar />,
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
