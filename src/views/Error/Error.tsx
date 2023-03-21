import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ErrorProps, ErrorDefaultProps, ErrorPropTypes } from './error.types'

import moon from '../../assets/svg/404/moon.svg'
import earth from '../../assets/svg/404/earth.svg'
import error404 from '../../assets/svg/404/404.svg'
import rocket from '../../assets/svg/404/rocket.svg'
import astronaut from '../../assets/svg/404/astronaut.svg'

import './Error.scss'

export const Error: FC<ErrorProps> = ({ redirect, title }) => {
    return (
        <div className='error'>
            <div className='error__stars'>
                <div className='error__body'>
                    <img className='error__404' src={error404} alt='text 404' />
                    <Link to={redirect} className='btn-home'>
                        {title}
                    </Link>
                </div>
                <div className='error__object'>
                    <img
                        className='error__object-rocket'
                        src={rocket}
                        alt='rocket'
                    />
                    <div className='earth-moon'>
                        <img
                            className='error__object-earth'
                            src={earth}
                            alt='earth'
                        />
                        <img className='error__object-moon' src={moon} alt='moon' />
                    </div>
                    <div className='box_astronaut'>
                        <img
                            className='error__object-astronaut'
                            src={astronaut}
                            alt='astronaut'
                        />
                    </div>
                </div>
                <div className='glowing_stars'>
                    <div className='star'></div>
                    <div className='star'></div>
                    <div className='star'></div>
                    <div className='star'></div>
                    <div className='star'></div>
                </div>
            </div>
        </div>
    )
}

Error.propTypes = ErrorPropTypes

Error.defaultProps = ErrorDefaultProps

export default Error
