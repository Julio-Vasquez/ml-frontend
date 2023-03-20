import { ReactElement } from 'react'
import { loader } from '../utils/loader/loader'

const errorPath = '*'
const searchBarPath = '/'
const searchResultPath = '/items?'
const detailProductPath = '/items/:id'

const DetailProduct = loader('DetailProduct')
const SearchBar = loader('SearchBar')
const SearchResult = loader('SearchResult')
const ErrorPage = loader('Error')

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
