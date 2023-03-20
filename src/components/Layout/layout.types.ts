import propTypes, { InferProps } from 'prop-types'

export const LayoutPropTypes = {
    children: propTypes.element.isRequired,
}

export type LayoutProps = InferProps<typeof LayoutPropTypes>
