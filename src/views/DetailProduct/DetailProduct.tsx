import { useParams } from 'react-router-dom'

import { Meta } from '../../components/Meta'
import { Product } from '../../components/Product'
import { Description } from '../../components/Description'

import { api } from '../../api'
import useFetch from '../../hooks/useFetch'
import { Loading } from '../../components/Loading'
import { ItemDetail } from '../../utils/interfaces/response.interface'

const DetailProduct = () => {
    const { id } = useParams()
    const { loading, data } = useFetch<ItemDetail>({ url: api.detail(id ?? '') })
    const objMeta = {
        keywords: ['Detalle', 'Producto', 'ML'],
        title: `${data?.item?.title} | Mercado Libre 📦`,
        description: `Envíos gratis en el día ✓ Comprá online de manera segura con Compra Protegida © ${data?.item.description}`,
        canonical: 'https://www.mercadolibre.com.ar/#from=homecom',
    }

    return loading && !data?.item ? (
        <Loading />
    ) : (
        <div style={{ backgroundColor: '#fff' }}>
            <Meta {...objMeta} />
            <Product
                price={data?.item?.price.amount}
                salesQuantity={data?.item?.sold_quantity}
                title={data?.item?.title}
                state={data?.item?.condition}
                image={data?.item.picture}
            />
            <Description description={data?.item.description} />
        </div>
    )
}

export default DetailProduct
