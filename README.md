# ReactApp consumiendo API de Yu-Gi-Oh

## Objetivo

**Desarrollar una aplicación con React consumiento la API de Yu-Gi-Oh (https://db.ygoprodeck.com/api/v7/cardinfo.php). Implementando filtros, ordenamiento asc-desc, buscadores y un formulario controlado para contacto. Esta API provee mas de 11.500 datos**

## Secciones
### Landing

* Muestra una imagen representativa de los datos obtenidos en la API. 
* Contiene dos botones para redirigir hacia Home y About.

![Imagen del Landing](https://i.postimg.cc/Kj9J7Ffm/landing.jpg)

### Home

*  Vista de las cartas obtenidas en la API.
*  Se muestran 20 cartas por defecto.
*  El navbar contiene un buscador para buscar por nombre o raza.
*  Filtro por las razas disponibles.
*  Ordenamientos ascendentes/descendentes por diferentes propiedades.
*  Contiene boton para cambiar las cartas mostradas en pantalla.

![Imagen del home](https://i.postimg.cc/66zjxLXF/home.jpg)

### Details

*  Contiene información completa de la tarjeta seleccionada en Home.

![Imagen del About](https://i.postimg.cc/mgP35k7H/detail.jpg)

### About

*  Contiene información de los Desarrolladores del proyecto.

![Imagen del About](https://i.postimg.cc/XJk2J9yG/about.jpg)

### Contacto

*  Contiene un formulario controlado para envio de mensaje a los desarrolladores.
*  En caso de completar correctamente los campos y que no haya errores se activa el boton para enviar.
*  Cuando se envia se emite un alert (sweetAlert2).

![Imagen del About](https://i.postimg.cc/HnW67jQS/contact.jpg)

### Footer
*  Contiene información de los Desarrolladores.
*  Contiene redirecciones hacia github, linkedin y email de los Desarrolladores.

![Imagen del Footer](https://i.postimg.cc/hjByc2hR/footer.jpg)

## Skills usados
* React
* Javascript
* React-Bootstrap
* React-router-dom
* Axios
* SweetAlert2
* Css

## Instalación
* Clonar el proyecto con **git clone https://github.com/gsuruguay/React-API-Yu-Gi-Oh.git**
* Ejecutar por consola desde la carpeta raiz del proyecto **npm install** para instalar las dependencias usadas.
* Ejecutar en consola desde la carpte de Client **npm start**

## Autores
**Guillermo Suruguay** / 
**Lourdes Alvarez**

[Escríbeme en Linkedin](https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web)
