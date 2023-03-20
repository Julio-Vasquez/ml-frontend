import propTypes from 'prop-types'

export const ErrorPropTypes = {
    redirect: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
}

export const ErrorDefaultProps = {
    redirect: '/',
    title: 'Page Not Found',
}

export type ErrorProps = propTypes.InferProps<typeof ErrorPropTypes>
