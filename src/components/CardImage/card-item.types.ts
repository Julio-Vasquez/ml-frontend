import propTypes, { InferProps } from 'prop-types'

export const CardItemPropTypes = {
    id: propTypes.string.isRequired,
    urlImage: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    shipping: propTypes.bool,
    price: propTypes.shape({
        currency: propTypes.string.isRequired,
        amount: propTypes.number.isRequired,
        decimals: propTypes.number,
    }).isRequired,
    description: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
}
export const CardItemDefaultPropTypes = {
    shipping: false,
}

export type CardItemProps = InferProps<typeof CardItemPropTypes>
