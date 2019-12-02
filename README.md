# Script Hub /docs BETA - 2.0b


## Novedades

* Nuevo motor de renderizado con [Docusaurus](https://v2.docusaurus.io/), [React](https://es.reactjs.org/)
* Gestor de versiones de documentación 
* Compatible con documentos de internacionalización y localización **i18n**
* Escritura de documentos con [MDXJS](https://mdxjs.com/) y [JSX](https://es.reactjs.org/docs/introducing-jsx.html)

## Quiero contribuir

Descarga y/o haz *fork* a este repositorio para contribuir con el desarrollo. Lo primero que tienes que hacer es lo siguiente:

### Instalación

```
$ yarn
```

### Desarrollo local

```
$ yarn start
```

Este comando inicia un servidor local de pruebas donde se ejecuta todas las dependencias necesarias de [Docusaurus](https://v2.docusaurus.io/) y la documentación.

### Build

```
$ yarn build
```

Este comando genera contenido estático en el directorio `build` y se puede ejecutar utilizando cualquier servicio de alojamiento de contenido estático.

### Deployment

```
$ yarn deploy
```

Si utilizarás **Github Pages** para hosting, este comando es una forma conveniente de *buildear* el sitio web y pasar al branch `gh-pages`.
