import { Meta } from '../../components/Meta'
import logo from '../../assets/img/Logo_ML.png'
import search from '../../assets/img/ic_Search.png'

import './SearchBar.scss'

const SearchBar = () => {
    const objMeta = {
        keywords: ['Mercado Libre', 'Busquedad', 'Inicio'],
        title: 'Mercado Libre Argentina - Envíos Gratis en el día',
        description: `Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.`,
        canonical: 'https://www.mercadolibre.com.ar/#from=homecom',
    }
    return (
        <div className='header'>
            <Meta {...objMeta} />
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
