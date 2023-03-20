import { HelmetProvider } from 'react-helmet-async'

import { AppRoutes } from './routes/AppRoutes'
import { NoData } from './components/NoData'
import Layout from './components/Layout/Layout'
import BreadcrumbContext from './context/BreadcrumbContext'

function App() {
    return (
        <HelmetProvider>
            <BreadcrumbContext>
                <Layout>
                    <AppRoutes />
                </Layout>
            </BreadcrumbContext>
        </HelmetProvider>
    )
}

export default App
