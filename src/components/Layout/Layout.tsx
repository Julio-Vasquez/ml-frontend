import { FC } from 'react'

import SearchBar from '../../views/SearchBar'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb'
import { useBreadcrumb } from '../../context/BreadcrumbContext'

import { LayoutProps, LayoutPropTypes } from './layout.types'

import './Layout.scss'

const Layout: FC<LayoutProps> = ({ children }) => {
    const { breadcrumb } = useBreadcrumb()

    return (
        <div className='app'>
            <header className='app__header'>
                <SearchBar />
            </header>

            <main className='app__container container-fluid '>
                <div className='offset-1 col-10'>
                    <div className='app__breadcrumb'>
                        <Breadcrumb categories={breadcrumb} />
                    </div>
                    {children}
                </div>
            </main>
        </div>
    )
}

Layout.propTypes = LayoutPropTypes

export default Layout
