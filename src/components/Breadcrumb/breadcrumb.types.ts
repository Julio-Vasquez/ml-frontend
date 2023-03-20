import propTypes, { InferProps } from 'prop-types'

export const BreadcrumbPropTypes = {
    categories: propTypes.arrayOf(propTypes.string.isRequired),
}

export const BreadcrumbDefaultProps = {
    categories: undefined,
}

export type BreadcrumbProps = InferProps<typeof BreadcrumbPropTypes>
