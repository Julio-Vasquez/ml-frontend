import { lazy, Suspense } from 'react'

import { Loading } from '../../components/Loading'

export const loader = (importFunction: any) => {
    const Component = lazy(importFunction)

    return (props: any) => (
        <Suspense fallback={<Loading />}>
            <Component {...props} />
        </Suspense>
    )
}
