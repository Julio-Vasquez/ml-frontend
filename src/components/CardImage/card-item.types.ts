import propTypes, { InferProps } from 'prop-types'

export const CardItemPropTypes = {
    urlImage: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    shipping: propTypes.bool,
    price: propTypes.number.isRequired,
    description: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
}
export const CardItemDefaultPropTypes = {
    shipping: false,
}

export type CardItemProps = InferProps<typeof CardItemPropTypes>
