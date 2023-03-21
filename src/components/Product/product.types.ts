import propTypes, { InferProps } from 'prop-types'

export const ProductPropTypes = {
    price: propTypes.number,
    state: propTypes.string,
    salesQuantity: propTypes.number,
    title: propTypes.string,
    image: propTypes.string,
}

export type ProductProps = InferProps<typeof ProductPropTypes>
