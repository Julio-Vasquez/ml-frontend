import propTypes, { InferProps } from 'prop-types'

export const DescriptionPropTypes = {
    description: propTypes.string,
}

export type DescriptionProps = InferProps<typeof DescriptionPropTypes>
