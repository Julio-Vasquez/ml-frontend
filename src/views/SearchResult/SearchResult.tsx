import { useEffect } from 'react'

import { Meta } from '../../components/Meta'
import { Loading } from '../../components/Loading'
import { CardItem } from '../../components/CardImage'

import { api } from '../../api'
import useFetch from '../../hooks/useFetch'
import { useQuery } from '../../hooks/useQuery'
import { useBreadcrumb } from '../../hooks/useBreadcrumb'
import { AllItems, Item } from '../../utils/interfaces/response.interface'

const SearchResult = () => {
    const query = useQuery()
    const { setBreadcrumb } = useBreadcrumb()
    const { data, loading } = useFetch<AllItems>({ url: api.search(query) })

    const items = data?.items?.slice(0, 4)
    const author = `${data?.author.name} ${data?.author.lastName}`

    const objMeta = {
        keywords: ['Resultado', 'Producto', 'ML'],
        title: `${query} | Mercado Libre 📦`,
        description: `Envíos Gratis en el día ✓ Comprá ${query} en cuotas sin interés!
         Conocé nuestras increíbles ofertas y promociones en millones de productos.`,
        canonical: 'https://www.mercadolibre.com.ar/#from=homecom',
    }

    useEffect(() => {
        if (!loading && data?.categories) {
            setBreadcrumb([data?.categories[0]])
        }
        // eslint-disable-next-line
    }, [loading])

    return loading && !data?.items ? (
        <Loading />
    ) : (
        <div>
            <Meta {...objMeta} />
            {items?.map((values: Item) => (
                <CardItem
                    id={values.id}
                    key={values.picture}
                    author={author}
                    price={values.price}
                    shipping={values.free_shipping}
                    description={values.title}
                    urlImage={values.picture}
                    alt={values.picture}
                />
            ))}
        </div>
    )
}

export default SearchResult
