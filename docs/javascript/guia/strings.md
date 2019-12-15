---
id: js-guia-2
title: JavaScript - Cadenas. (Strings)
sidebar_label: JavaScript - Cadenas.
---

# Cadenas - <Strings>

**Nota importante:** Antes de empezar, es importante saber lo siguiente:*

* `Output` será igual a lo que se imprimirá en la consola, el dato que te regresa.

* `Retorna` será lo que nos regresa el programa, es muy parecido al output, la única diferencia es que este dato no se reflejará a menos que hagamos un `console.log()` o con una función similar.

* NodeJS es un entorno que ejecuta JavaScript y todos sus archivos deben terminar en `.js`

## console.log()
Es una función que nos permitirá imprimir un resultado en nuestra consola.

```js
console.log("¡Hola mundo!");
//Output: ¡Hola mundo!
```
Esto imprimirá en la consola en la consola nuestro mensaje contenido entre `()`, en este caso se imprimió `¡Hola mundo!`.

**Las cadenas siempre irán dentro de `" "`, `' '`, o `` ` ` ``**. Por ejemplo:
```js
"¡Hola! Mi nombre es Karol.";
'El día está soleado';
`;-;`;
```

## Propiedades

### <String>.length
Podemos medir la longitud de una cadena (el número de caracteres que contiene) con `.length`, aquí un ejemplo;

```js
console.log("¡Hola!".length);
//Retorna: Number
//Output: 6
```

## Métodos

### <String>.toLowerCase()
Podemos imprimir toda la cadena en minúscula, por ejemplo;
```js
console.log("Hola, me llamo Karol YAYY");
//Output: hola, me llamo karol yayy
```

### <String>.toUpperCase()
Podremos imprimir toda la cadena en mayúscula, por ejemplo;

```js
console.log("Hola, me llamo Sebastián".toLowerCase());
//Output: HOLA, ME LLAMO SEBASTIÁN
```
### <String>.trim()
Podremos eliminar los espacios en blanco o todo lo que se relacione a caracteres que formen nuevas líneas, por ejemplo:

```js
console.log("    Paris   ".trim();
//Output: Paris
```
### <String>.includes()
Podremos obtener un valor *booleano* indicando si la palabra existe o no en la cadena, por ejemplo:

```js
console.log("Jirafa del Zoo".includes("jirafa"));
// Output: false
```
El método `.includes()` es *case sensitive*, así que no tomará en cuenta de igual manera si la palabra tiene mayúsculas o minúsculas, por lo tanto:

```js
console.log("Jirafa del Zoo".includes("Jirafa"));
//Output: true
```
En esta ocasión retornara `true` porque `Jirafa` está incluida en la cadena.

**Nota:** Si el valor en la cadena existe retornará `true` o de lo contrario, `false`. (Un booleano)

### <String>.startsWith()
Podremos obtener un valor *booleano* indicando si la cadena empieza por un caracter, sea `true` o `false` según el caso, por ejemplo:

```js
console.log("Hola Mundo".startsWith("hola"))
//Output: false
```
El método `.startsWith()` es *case sensitive*, así que no tomará en cuenta de igual manera si la palabra tiene mayúsculas o minúsculas, esto puede ser corregido con otro método explicado más arriba, pero si es una cadena específica deberá ser así:
```js
console.log("Hola Mundo".startsWith("Hola"))
//Output: true
```
### <String>.endsWith()
Podremos obtener un *booleano* incidando si el último valor de la cadena existe, sea `true` o `false` según el caso, por ejemplo:

```js
console.log("Hola Mundo".endsWith("Mundo"))
//Output: true
```

### <String>.split()
Podremos dividir en objetos un `<String>` en un `<Array>`, por ejemplo:

```js
var cadena = "Hola Mundo"
var separadorCadena = cadena.split(" ")

console.log(separadorCadena)

// Output: ["Hola"] ["Mundo"]
```


## Cadena de vacío

### undefined
Esto es en su medida "inútil" pero siempre es bueno saberlo.
Cuando un String está vacío, no tiene nada o no está definido.

```js
let texto;
//Retorna: undefined
console.log(texto);
//Output: undefined
```