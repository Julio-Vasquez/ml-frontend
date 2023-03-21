import { CardItem } from '../../components/CardImage'

const SearchResult = () => {
    return (
        <div>
            <CardItem
                author='Julio'
                alt='hey'
                description='lalalal this is a text cool'
                price={345678}
                shipping
                urlImage='https://i.scdn.co/image/ab6761610000e5eb47e877323b9ed3e02aad1499'
            />
            <CardItem
                author='Julio'
                alt='hey'
                description='lalalal this is a text cool'
                price={345678}
                urlImage='https://i.scdn.co/image/ab6761610000e5eb47e877323b9ed3e02aad1499'
            />
            <CardItem
                author='Julio Alfredo Vasquez'
                alt='hey'
                description='lalalal this is a text cool'
                price={345678}
                urlImage='https://i.scdn.co/image/ab6761610000e5eb47e877323b9ed3e02aad1499'
            />
        </div>
    )
}

export default SearchResult
