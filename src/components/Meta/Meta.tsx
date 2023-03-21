import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { MetaProps, MetaPropTypes } from './meta.types'

export const Meta: FC<MetaProps> = ({ title, description, keywords, canonical }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property='og:title' content={title} />
            <meta name='apple-mobile-web-app-title' content={title} />
            <meta name='twitter:title' content={title} />
            <meta name='keywords' content={keywords.join(', ')} data-rh='true' />
            <meta name='description' content={description} data-rh='true' />
            <meta property='og:description' content={description} />
            <meta name='twitter:description' content={description} />
            {canonical && (
                <link rel='canonical' href={canonical} data-head-react='true' />
            )}
        </Helmet>
    )
}

Meta.propTypes = MetaPropTypes
