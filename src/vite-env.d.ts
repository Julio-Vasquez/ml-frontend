/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL_API: string
    readonly VITE_PORT: number
    readonly VITE_PREFIX: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
