export const api = {
    search: (query: URLSearchParams) => `items?${query}`,
    detail: (id: string) => `items/${id}`,
}
