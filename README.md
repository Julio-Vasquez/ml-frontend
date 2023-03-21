# Primeros pasos con Vite.js 

Este proyecto fue inicializado con [Vite](https://github.com/vitejs/vite).

## Clonar el repositorio:

```bash
# Para clonar el repositorio solo tenemos que abrir nuestra terminal y ejecutar:

  git clone https://github.com/Julio-Vasquez/ml-frontend

# Ahora abrimos la carpeta

  cd ml-frontend
```

## Ahora instalamos las dependencias

```bash
# Dependiendo del gestor de paquetes utilicemos (npm, yarn, pnpm)
  - npm install
  - yarn install
  - pnpm install
```

## Variables de entorno

Para ejecutar este proyecto, deberá añadir las siguientes variables de entorno a su archivo .env

-   `VITE_BASE_URL_API`
-   `VITE_PORT`
-   `VITE_PREFIX`
-   `VITE_LOCATION`
-   `VITE_CURRENCY`

## Tecnologías

-   React
-   Sass
-   React Router Dom
-   Prop Types
-   React Helmet Async
-   Bootstrap Grid
-   TypeScript

## Scripts Disponibles

En el directorio del proyecto, puede ejecutar

### `yarn run build` | `npm run build` | `pnpm run build`

Ejecuta una compilación de los archivos .ts a .js
el directorio de salida depende del tsconfig, para el caso es `/dist`

### `yarn run dev` | `npm run dev` | `pnpm run dev`

Ejecuta la aplicación en modo desarrollo.
La página se volverá a cargar cuando realice cambios.
También puede ver errores en la consola.

### `yarn run preview` | `npm run preview` | `pnpm run preview`

Ejecuta la aplicación previamente generada con el comando de `build`.
La página no se recarga cuando realice cambios.
Es importante tener en cuenta que vite preview está diseñado para obtener una vista previa de la compilación localmente y no como un servidor de producción

## Author

-   [@Julio Vasquez](https://www.github.com/Julio-Vasquez)
