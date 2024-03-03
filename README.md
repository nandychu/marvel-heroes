# Marvel Characters App

Esta es una pequeña aplicación web para obtener información sobre diferentes personajes de Marvel.

## General

La aplicación consta de dos vistas principales las cuales se han desarrollado aplicando los diseños en Figma proporcionados.
Para la generación del scaffold base, se utilizó Vite con Typescript y usando React Router V6.

### Estructura y Arquitectura

El proyecto se elabora teniendo como base las páginas principales y se completa mediante el uso de componentes reutilizables, especificando mediante interfaces siempre sus propiedades para un correcto uso en cualquier lugar de la app.

Para mantener el estado se ha usado Context API de React con el fin de poder sincronizar todos los componentes y datos independientemente de la pantalla en la que nos encontremos.

Se ha hecho uso del preprocesador SASS para el estilo y se han creado componentes reutilizables en carpetas con sus respectivos hojas de estilo a fin de poder localizar de forma eficiente el estilo sobre el que se desea trabajar.

Mediante el MarvelService contactamos con la API que nos provee de todos los datos necesarios para el uso de la app. Para este ejemplo se ha incluido en el fichero .env en el repositorio el cual contiene las credenciales de acceso.

Se han incluido varios tests unitarios en el proyecto, que, por cuestiones de tiempo en el desarrollo contienen únicamente ejemplos básicos preparados para ser escalables al haber implementado tanto Jest como React Testing Library y sus correspondientes archivos de configuración.

Para animaciones de las rutas se ha utilizado la librería open source Framer la cual nos permite crear animaciones con un mínimo impacto en el rendimiento.

Se ha utilizado ESLint y Prettier para mantener el código limpio y organizado.

## Ejecución

Tenemos varios scripts disponibles para su despliegue:

- Instalamos las dependecias

```bash
yarn install
```

A continuación tendremos varias opciones para consumir la app.

- Ejecución con servidor fast-refresh

```bash
yarn run dev
```

- Creará un build del proyecto listo para producción minimizado.

```bash
yarn run build
```

- Creará un servidor en local el cual servirá el proyecto compilado.

```bash
yarn run preview
```


Para ejecutar los tests podemos utilizar el comando

```bash
yarn run test
```