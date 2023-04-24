# Individual Project - Henry Videogames

![Lucky gamer - Home](./sample.png)

# Objetivos 🎯

## Del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.

- Conectar frontend, backend y base de datos.

- Mejorar el workflow de GIT.

- Aprender mejores prácticas.

- Practicar documentación.

- Practicar testing.

## Del Sitio

Crear una aplicación web donde se puedan encontrar diferentes tipos de juegos, utilizando una API externa (Source: https://api.rawg.io/docs/ - Webpage: [Rawg.io](https://rawg.io/)) que, entre otras cosas, permita:

✅ Buscar Juegos 🔍

✅ Filtrarlos por genero y origen

✅ Ordenarlos por puntaje ⭐ y por orden alfabetico, de manera ascendente ⏫ y descendente ⏬

✅ Obtener una recomendación aleatoria
  
✅ Añadir nuevos juegos  🎮 🕹 👾

# Tecnologias utilizadas 💻

Frontend: React, redux, css  

Backend: Node, Express, Sequelize  

DataBase: Postgresql  

Extras: Miro, Svg Generator

# Instancias

_ Actualmente se encuentra deployado y podes visitarlo en el link a continuación.
<a href="https://lucky-gamer.glitch.me/#/" target="_blank">Link deploy</a>

_ Otra opción es que descargues este repositorio y sigas las  siguientes instrucciones.


## Requisitos para ejecutar localmente ⚙

### Instalacion y referencia de la base de datos

1. Instalar PostgreSQL
2. Crear una base de datos con el nombre "videogames"
3. Dentro de ./api cree un archivo .env con sus credenciales, como se muestra a continuacion

```Javascript
DB_USER=usuario_de_postgres
DB_PASSWORD=password_de_postgres
DB_HOST=localhost
API_KEY=your_Api_Key
```

Reemplazar `usuariodepostgres`, `passwordDePostgres` y `DB_HOST` con tus propias credenciales para conectarte a postgres. 

Reemplazar `API_KEY` con una key de rawg.io, la cual se le otorga al usuario de manera gratuita un vez se registra en el sitio. Tener en cuenta que se pueder hacer hasta 10 000 llamadas a esta api por mes, luego de dicho periodo, este valor se renueva.

### Instalacion de paquetes

Utilice el administrador de paquetes de su preferencia para instalar, aqui se muestra con npm. Recuerde ejecutar este comando dentro de /client y dentro de /api

```Javascript
npm install
```

### Ejecución local
_ FrontEnd: Dentro ./client

```Javascript
npm start
```

_ BackEnd: Dentro de ./client

```Javascript
npm start
```

## A buscar juegos se ha dicho !!! 🎮

¿ Qué es lo que voy a visualizar una vez entro en el sitio ?

- Página de bienvenida y entrada al Home
- Pagina Principal donde se visualizan los juegos
- El detalle de cada juego
- Formulario de creación de items (juegos)
- Sección para pedir una recomendación aleatoria
