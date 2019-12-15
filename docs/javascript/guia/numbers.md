---
id: js-numbers
title: JavaScript - Números. (Ecuaciones y métodos)
sidebar_label: JavaScript - Números.
---

# Números - *Numbers*

**Nota importante:** Antes de empezar, es importante saber lo siguiente:
* En programación se cuenta desde el número 0, es decir; 0, 1, 2, 3, 4, 5.
* La función matemática para números complejos se llama `Math()`, no podrás realizar una ecuación compleja usando caracteres matemáticos complejos.
* Los números no se representan igual que una `<String>`, o sea; `"1"`, `'1'` o ` `1` `. 

Un ejemplo de operación aritmética simple e imprimirlo en tu consola:
```js
console.log(1 + 1)
//Retorna Number
//Output: 2
```

## Métodos

### Number.isNaN()
Podremos retornar un *booleano* determinando si el valor pasado es `NaN`. *No confundir con la función global `isNaN()`*

* `true`: El valor introducido no es un `<Number>`
* `false`: El valor introducido es un `<Number>`

```js
console.log(Number.isNaN(26));
//Output: false
```
Y en caso de que el párametro no sea un número:
```js
console.log(Number.isNaN(NaN));

//Output: true
```

### Number.toString()
Podremos convertir a un valor `<Number>` a `<String>`.

```js
console.log(Number.toString(200456));

//Output: 200456
```

### Number.isInteger()
Podremos comprobar si un `<Number>` es un entero o no según sea el caso.

```js
console.log(Number.isInteger(20));
//Output: true
```
Y en caso de que sea un número flotante: 

```js
console.log(Number.isInteger(14.6));
//Output: false
```

## Cuando NO representa un número

### NaN
Esto es en su medida "inútil" pero siempre es bueno saberlo.
Cuando no se representa un número válido en una sentencia que requiera de un valor `<Number>` o númerico, este devolvera `NaN` cuando no es un número válido. 

```js
console.log(isNaN("Hola"));
//Output: NaN
```

### null
Al igual que con las cadenas esto es medianamente "inútil" pero siempre es bueno saberlo.
Cuando un Number está vacío, no tiene nada o no está definido.

```js
let número;
//Retorna: undefined
console.log(número);
//Output: null
```