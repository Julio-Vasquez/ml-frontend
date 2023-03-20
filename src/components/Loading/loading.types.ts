import propTypes, { InferProps } from 'prop-types'

export const LoadingPropTypes = {
    message: propTypes.string,
}

export const DefaultLoadingPropTypes = {
    message: 'Cargando',
}

export type LoadingProps = InferProps<typeof LoadingPropTypes>
