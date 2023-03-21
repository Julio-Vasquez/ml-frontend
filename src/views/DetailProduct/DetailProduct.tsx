import { useParams } from 'react-router-dom'

import { Product } from '../../components/Product'
import { Description } from '../../components/Description'

import { api } from '../../api'
import useFetch from '../../hooks/useFetch'
import { Loading } from '../../components/Loading'
import { ItemDetail } from '../../utils/interfaces/response.interface'

const DetailProduct = () => {
    const { id } = useParams()

    const { loading, data } = useFetch<ItemDetail>({ url: api.detail(id ?? '') })

    return loading && !data?.item ? (
        <Loading />
    ) : (
        <div>
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
