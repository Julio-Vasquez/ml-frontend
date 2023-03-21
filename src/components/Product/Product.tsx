import { FC } from 'react'

import { formatPrice } from '../../utils/format/number.util'
import { ProductProps, ProductPropTypes } from './product.types'
import { CURRENCY, LOCATION } from '../../utils/constants/environment.constant'

export const Product: FC<ProductProps> = ({
    price,
    salesQuantity,
    state,
    title,
    image,
}) => {
    const productState = state === 'new' ? 'Nuevo' : 'Usado'
    return (
        <div className='product-information'>
            <img src={`${image}`} alt='' />
            <p className='product-status'>
                {productState}- {salesQuantity} vendidos
            </p>
            <h1 className='product-title'>{title}</h1>
            <h2 className='product-price'>
                {formatPrice({
                    value: price ?? 0,
                    location: LOCATION,
                    currency: CURRENCY,
                    decimalLength: 0,
                })}
            </h2>
            <div className='product-purchase'>
                <button title='comprar' className='btn'>
                    comprar
                </button>
            </div>
        </div>
    )
}

Product.propTypes = ProductPropTypes
