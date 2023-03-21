import { FC, useState } from 'react'

import { BreadcrumbContext } from './BreadcrumbContext'

import { BreadcrumbPropTypes, BreadcrumbProps } from './breadcrumb-context.types'

const BreadcrumbProvider: FC<BreadcrumbProps> = ({ children }) => {
    const [breadcrumb, setBreadcrumb] = useState<string[]>([])

    const handleSetBreadcrumb = (array: string[]) => {
        setBreadcrumb([...breadcrumb, ...array])
    }

    return (
        <BreadcrumbContext.Provider
            value={{ breadcrumb, setBreadcrumb: handleSetBreadcrumb }}
        >
            {children}
        </BreadcrumbContext.Provider>
    )
}

BreadcrumbProvider.propTypes = BreadcrumbPropTypes

export default BreadcrumbProvider
