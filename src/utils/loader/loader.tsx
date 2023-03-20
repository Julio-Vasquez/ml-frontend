import { lazy, Suspense } from 'react'

import { Loading } from '../../components/Loading'

export const loader = (nameView: string) => {
    const Component = lazy(() => import(`../../views/${nameView}`))

    return (props: any) => (
        <Suspense fallback={<Loading />}>
            <Component {...props} />
        </Suspense>
    )
}
