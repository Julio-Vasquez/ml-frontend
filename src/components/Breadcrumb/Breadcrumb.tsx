import { FC } from 'react'

import {
    BreadcrumbDefaultProps,
    BreadcrumbProps,
    BreadcrumbPropTypes,
} from './breadcrumb.types'

import './Breadcrumb.scss'

export const Breadcrumb: FC<BreadcrumbProps> = ({ categories }) => {
    return (
        <nav className='breadcrumb'>
            {categories?.map((category: string, key: number) => (
                <ul key={key} className='breadcrumb__item'>
                    {category}
                </ul>
            ))}
        </nav>
    )
}

Breadcrumb.propTypes = BreadcrumbPropTypes
Breadcrumb.defaultProps = BreadcrumbDefaultProps
