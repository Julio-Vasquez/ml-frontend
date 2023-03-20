import { HelmetProvider } from 'react-helmet-async'

import { AppRoutes } from './routes/AppRoutes'
import { NoData } from './components/NoData'

function App() {
    return (
        <HelmetProvider>
            <AppRoutes />

            <NoData />
        </HelmetProvider>
    )
}

export default App
