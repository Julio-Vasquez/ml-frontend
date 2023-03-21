type Author = {
    name: string
    lastName: string
}

export type Item = {
    id: string
    title: string
    price: {
        currency: string
        amount: number
        decimals: number
    }
    picture: string
    condition: string
    free_shipping: boolean
    sold_quantity?: number
    description?: string
}

export type ItemDetail = {
    author: Author
    item: Item
}

export type AllItems = {
    author: Author
    categories: string[]
    items: Item[]
}
