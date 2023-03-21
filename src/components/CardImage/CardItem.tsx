import { FC } from 'react'

import shippingImg from '../../assets/img/ic_shipping.png'

import { formatPrice } from '../../utils/format/number.util'
import { CURRENCY, LOCATION } from '../../utils/constants/environment.constant'
import {
    CardItemDefaultPropTypes,
    CardItemProps,
    CardItemPropTypes,
} from './card-item.types'

import './CardItem.scss'

export const CardItem: FC<CardItemProps> = ({
    alt,
    urlImage,
    shipping,
    author,
    description,
    price,
}) => {
    return (
        <div className='card'>
            <div>
                <img className='card__image' src={urlImage} alt={alt} />
            </div>
            <div className='card__content'>
                <div className='card__description col-8'>
                    <div className='card__description-title'>
                        <h2>
                            {formatPrice({
                                value: price,
                                location: LOCATION,
                                currency: CURRENCY,
                                decimalLength: 0,
                            })}
                        </h2>
                        {shipping && <img src={shippingImg} alt='shipping' />}
                    </div>
                    <div className='card__description-body'>{description}</div>
                </div>
                <div className='card__author offset-1 col-3'>{author}</div>
            </div>
        </div>
    )
}

CardItem.propTypes = CardItemPropTypes
CardItem.defaultProps = CardItemDefaultPropTypes
