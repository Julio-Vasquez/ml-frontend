import { FC } from 'react'

import { DescriptionProps, DescriptionPropTypes } from './description.types'

import './Description.scss'

export const Description: FC<DescriptionProps> = ({ description }) => {
    return (
        <div className='row mt-4'>
            <div className='col-8'>
                <div className='product-description'>
                    <div className='product-description__content'>
                        <div className='product-description__title'>
                            Descripción del producto
                        </div>
                        <p className='product-description__text'>
                            {description ?? 'No Descripción'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

Description.propTypes = DescriptionPropTypes
