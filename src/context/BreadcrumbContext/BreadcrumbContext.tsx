import { createContext } from 'react'
import { BreadcrumbContextType } from './breadcrumb-context.types'

export const BreadcrumbContext = createContext<BreadcrumbContextType>({
    setBreadcrumb: () => {},
    breadcrumb: [],
})
