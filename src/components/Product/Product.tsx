import { FC } from 'react'

import { formatPrice } from '../../utils/format/number.util'
import { ProductProps, ProductPropTypes } from './product.types'
import { CURRENCY, LOCATION } from '../../utils/constants/environment.constant'

import './Product.scss'

export const Product: FC<ProductProps> = ({
    price,
    salesQuantity,
    state,
    title,
    image,
}) => {
    const productState = state === 'new' ? 'Nuevo' : 'Usado'
    return (
        <div className='row'>
            <div className='col-7'>
                <div className='product-gallery'>
                    <img src={`${image}`} alt='image' />
                </div>
            </div>
            <div className='offset-1 col-3'>
                <div className='product-information'>
                    <p className='product-information__status'>
                        {productState} - {salesQuantity} vendidos
                    </p>
                    <h1 className='product-information__title'>{title}</h1>
                    <h2 className='product-information__price'>
                        {formatPrice({
                            value: price ?? 0,
                            location: LOCATION,
                            currency: CURRENCY,
                            decimalLength: 0,
                        })}
                    </h2>
                    <div className='product-information__actions'>
                        <button title='comprar' className='btn'>
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Product.propTypes = ProductPropTypes
