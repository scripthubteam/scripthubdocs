---
id: js-guia-3
title: Manipulando strings
sidebar_label: Manipulando strings
---

## Strings

A continuación veremos distintas maneras de manipular strings.

### length

Podemos obtener la longitud de un string con la propiedad `.length`.

```js
var myStr = "Hola";
console.log(myStr.length);
//Output: 4
```

### indexOf

Retornará la primera posición de un string específico.

```js
var str = "Esta es una cadena de texto, mucho texto";
str.indexOf("texto");
//Output: 5
```

### lastIndexOf

Retornará la última posición de un string específico.

```js
var str = "Esta es una cadena de texto, mucho texto";
str.lastIndexOf("texto");
//Output: 7
```

### slice

Extrae una parte de un string y lo retorna en otro string. El primer parámetro es donde empezará a cortar y el segundo parámetro donde dejará de hacerlo.

```js
var str = "Lau es el mejor";
var sl = str.slice(4, 8);
//Output: es el
```

### substr

Funciona igual que el método slice(), a diferencia de que el segundo parámetro es la longitud (length) de la parte a cortar.

```js
var str = "Lau es el mejor";
var sl = str.slice(10, 4);
//Output: mejor
```

### replace

El método `replace()` reemplaza un valor específico por el indicado en una nueva string.

```js
var str = "Aprende con Microsoft";
var cst = str.replace("Microsoft", "Script Hub");
//Output: Aprende con Script Hub
```

Este método solo reemplazará el primer encuentro con el parámetro específicado.

```js
var str = "Aprende con Microsoft y Microsoft.";
var cst = str.replace("Microsoft", "Script Hub");
//Output: Aprende con Script Hub y Microsoft
```

`replace()` es sensible al caso, es decir a las `mayúsculas` y `minúsculas`.
Para ignorar dicha sensibilidad podemos utilizar la `expresión regular /i (insensitivo)`

```js
var str = "Aprende con Microsoft";
var cst = str.replace("MICROSOFT", "Script Hub");
//Nota: No pasará nada, ya que no coincide en mayúsculas/minúsculas
//Output: Aprende con Microsoft

cst = str.replace(/MICROSOFT/i, "Script Hub");
//Output: Aprende con Script Hub
```

Para que la búsqueda sea global, es decir, que encuentre todos los resultados, utilizaremos la `expresión regular /g (global)`

```js
var str = "Aprende con Microsoft y Microsoft";
var cst = str.replace(/Microsoft/g, "Script Hub");
//Output: Aprende con Script Hub y Script Hub
```

### toUpperCase y toLowerCase

Puedes convertir un string en mayúsculas con `toUpperCase()` y a minúsculas con `toLowerCase()`

```js
var stx = "Hola";
var sct = stx.toUpperCase(); //Output: HOLA
sct = stx.toLowerCase(); //Output: hola
```

### trim

El método `trim()` elimina los espacios en blanco al principio y final de una string.

```js
var str = "   Hola   ";
console.log(str.trim());
//Output: Hola
```

### charAt

Este método retorna el carácter de la posición específicada.

```js
var str = "Hola";
console.log(str.charAt(2));
//Output: l
```
