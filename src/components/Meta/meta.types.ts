import propTypes, { InferProps } from 'prop-types'

export const MetaPropTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    keywords: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    canonical: propTypes.string,
}

export type MetaProps = InferProps<typeof MetaPropTypes>
