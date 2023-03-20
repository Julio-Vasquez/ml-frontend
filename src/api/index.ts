export const api = {
    search: (query: string) => `api/items?q=${query}`,
    detail: (id: string) => `api/items/${id}`,
}
