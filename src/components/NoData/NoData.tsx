import empty from '../../assets/svg/no-data/empty.svg'

import './NoData.scss'

export const NoData = () => (
    <div className='no-data__empty'>
        <div className='no-data__icon'>
            <img src={empty} alt='empty' />
        </div>
        <span className='no-data__description'>No data - Empty</span>
    </div>
)
