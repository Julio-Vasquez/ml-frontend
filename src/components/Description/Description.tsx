import { FC } from 'react'
import { DescriptionProps, DescriptionPropTypes } from './description.types'

export const Description: FC<DescriptionProps> = ({ description }) => {
    return (
        <div>
            <h3>Descripción del producto</h3>
            <p>{description}</p>
        </div>
    )
}

Description.propTypes = DescriptionPropTypes
