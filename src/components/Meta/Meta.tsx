import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { MetaProps, MetaPropTypes } from './meta.types'

export const Meta: FC<MetaProps> = ({ title, description, keywords, canonical }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} data-rh='true' />
            <meta name='keywords' content={keywords.join(', ')} data-rh='true' />
            {canonical && (
                <link rel='canonical' href={canonical} data-head-react='true' />
            )}
        </Helmet>
    )
}

Meta.propTypes = MetaPropTypes
