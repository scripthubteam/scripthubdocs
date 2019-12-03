---
id: js-guia-2
title: Primer vistazo a JavaScript
sidebar_label: Primer vistazo a JavaScript
---

### Lo básico, pero indispensable
## console.log()
Comenzaremos viendo la función `console.log()`, la cual nos permitirá "imprimir" un mensaje en nuestra consola.

```js
console.log("Hola")
```

Esto imprimirá un mensaje con el contenido "Hola" en nuestra consola.

## Comentarios
En JavaScript podemos comentar nuestro propio código escribiendo `// (para una línea)` o `/**/ (para un bloque de líneas/comentario)` y el programa ignorará por completo el contenido que esté entre esos signos.

```js
console.log("Hola") //Imprime Hola en la consola

// Esto es un comentario de una línea.
/*
Esto es un comentario bloque de comentario.
*/
```

## Variables
En JavaScript una variable es un contenedor para guardar distintos tipos de datos.

```js
var x = 10
var myString = "Hola"

console.log(x)
console.log(myString)
```

Los datos de una variable o constante en JavaScript pueden concatenarse usando el signo `+` seguido de otra variable o signo que indica que el valor de ese mensaje se enviará en forma de `string`, por ejemplo:

```
var myString = "No quedará en la noche una estrella."
console.log(myString+" Llegó la nada a nadie.") 
```

El dato introducido junto a `myString` en la línea donde se encuentra `console.log` se podrá concatenar en este caso definiendo que la sentencia es una `string` poniendo las comillas (`""`) y el signo de `+` para separar ambos tipos de datos.

```js
var nombre = "Lau"
console.log("Mi nombre es "+nombre)
```

## Datos a tener en cuenta
* **JavaScript es sensible a algunos tipos de escritura**
No es lo mismo escribir `edad` que `Edad`, pues, es sensible a los cáracteres y aunque a nosotros no parezca que es lo mismo debes tener en cuenta que mientras el programa se compila las mayúsculas y minúsculas son carácteres distintos por su [código ASCII](https://es.wikipedia.org/wiki/ASCII).

  ```js
  var edad = 20 //Una variable
  var Edad = 20 //Otra variable
  ```
* **Bloque de código.**
  Son un conjunto de enunciados que deberán ejecutarse con una secuencia completa. Se indican con `{}`.
