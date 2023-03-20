import propTypes, { InferProps } from 'prop-types'

export const BreadcrumbPropTypes = {
    children: propTypes.element.isRequired,
}

export type BreadcrumbProps = InferProps<typeof BreadcrumbPropTypes>
export type BreadcrumbContextType = {
    breadcrumb: string[]
    setBreadcrumb: Function
}
