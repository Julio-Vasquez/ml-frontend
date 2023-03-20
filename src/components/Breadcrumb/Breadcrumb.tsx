import { FC } from 'react'

import {
    BreadcrumbDefaultProps,
    BreadcrumbProps,
    BreadcrumbPropTypes,
} from './breadcrumb.types'

import './breadcrumb.scss'

const Breadcrumb: FC<BreadcrumbProps> = ({ categories }) => {
    return (
        <nav className='breadcrumb'>
            {categories?.map((category: string) => (
                <ol key={category} className='breadcrumb__item'>
                    {category}
                </ol>
            ))}
        </nav>
    )
}

Breadcrumb.propTypes = BreadcrumbPropTypes
Breadcrumb.defaultProps = BreadcrumbDefaultProps

export default Breadcrumb
