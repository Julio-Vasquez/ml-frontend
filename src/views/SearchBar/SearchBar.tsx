import logo from '../../assets/img/Logo_ML.png'
import search from '../../assets/img/ic_Search.png'

import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className='header'>
            <div className='container-fluid'>
                <div className='header__container offset-1 col-10'>
                    <div>
                        <a href='/'>
                            <img src={logo} alt='logo mercado libre' />
                        </a>
                    </div>
                    <form
                        className='header__form-content'
                        method='get'
                        action={'/items'}
                    >
                        <input
                            className='header__form-search'
                            type='search'
                            placeholder='Nunca dejes de buscar'
                            name='q'
                        />
                        <button className='header__btn-search' aria-label='Buscar'>
                            <img src={search} alt='btn search' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
