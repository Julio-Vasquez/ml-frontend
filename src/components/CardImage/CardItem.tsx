import { FC } from 'react'
import { Link } from 'react-router-dom'

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
    id,
}) => {
    return (
        <div className='card'>
            <div>
                <Link to={id}>
                    <img className='card__image' src={urlImage} alt={alt} />
                </Link>
            </div>
            <div className='card__content'>
                <div className='card__description col-8'>
                    <div className='card__description-title'>
                        <Link to={id}>
                            <h2>
                                {formatPrice({
                                    value: price.amount,
                                    location: LOCATION,
                                    currency: CURRENCY,
                                    decimalLength: 0,
                                })}
                            </h2>
                        </Link>
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
