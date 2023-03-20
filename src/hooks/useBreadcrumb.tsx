import { useContext } from 'react'

import { BreadcrumbContext } from '../context/BreadcrumbContext/BreadcrumbContext'
import { BreadcrumbContextType } from '../context/BreadcrumbContext/breadcrumb-context.types'

export const useBreadcrumb = (): BreadcrumbContextType => {
    const context = useContext(BreadcrumbContext)
    if (!context) {
        throw new Error('useBreadcrumb must be used within a BreadcrumbContext')
    }
    return context
}
