---
id: rb-guia-2
title: Nuestro primer programa
sidebar_label: Nuestro primer programa  
---

## Hola Mundo
Ya hemos instalado Ruby en el capítulo anterior y hemos dado una introducción al lenguaje, así que ahora nos tocará empezar a trabajar en él!

Como en todo lenguaje que vamos aprendiendo, haremos un programa que muestre un hola mundo.

En Ruby hay 2 formas de mostrar contenido en la terminal,  `puts` y  `print`. A continuación veremos en qué se diferencian para saber cuál elegir en cada caso.

| puts | print |
|:------:|:------:|
|    muestra el contenido y hace un salto de línea    |    muestra el contenido sin hacer salto de línea    |

Con nuestro primer programa (Hola mundo), usaremos puts. Para crear nuestro programa vamos a seguir una serie de pasos muy sencillos que veremos a continuación, pero antes unos requisitos previos.

| Prerrequisitos |
|:------:|
|    Tener instalado Ruby    |
|    Tener un editor de código o IDE    |


Ya teniendo eso, empezaremos con nuestros pasos.
1. Crear un nuevo archivo que termine con la extensión `.rb`, en esta guía utilizaremos `hola_mundo.rb`.
2. Abrir nuestro archivo con nuestro editor de código
3. Escribir en nuestro archivo la línea de código `puts "Hola mundo!"`.
4. Guardar nuestro archivo y ejecutarlo, utilizando `ruby hola_mundo.rb`.

Esto tendrá como resultado lo siguiente.
```console
$ ruby hola_mundo.rb
Hola mundo!
```

## Números
En Ruby, podemos utilizar números enteros, decimales y realizar operaciones matemáticas básicas con ellos de manera nativa, es decir, sin librerías externas.

```rb
2 + 2 # => 4
2 - 2 # => 0
2 * 2 # => 4
2 / 2 # => 1

1.5 + 1.5 # => 3.0
```

Para redondear números en Ruby, podemos utilizar el método `round`.
```
decimal = 1.5 + 1.5 # => 3.0
decimal.round # => 3
```

## Strings
En Ruby, podemos hacer montones de cosas con las Strings, que, además, tienen ciertas diferencias al usar comillas dobles `" "` y comillas simples `' '`.

- ¿Cuáles son estas diferencias?

Estas diferencias son mínimas, por lo cual no debemos darnos dolores de cabeza. La mayor diferencia, que es de la cual hablaremos, es que en Ruby, el tiempo de ejecución de las strings es más rápido con comillas simples que con comillas dobles.

En Ruby, para interpolar variables dentro de Strings, deberemos introducirlas dentro de `#{}`; también puedes utilizar la unión de Strings. A continuación te daré algunos ejemplos para que puedas ver las diferencias entre ambos modelos (veremos las variables más adelante).

```rb
# Con Interpolación de variables
nombre = "Monspeet"
puts "Hola, #{nombre}!"
# => Hola, Monspeet!

# Con unión de Strings
nombre = "Monspeet"
puts "Hola, " + nombre
# => Hola, Monspeet!
```

También, podemos aplicarles numerosos métodos a nuestras cadenas de Strings, tales como downcase, upcase, capitalize, length, etc. Acá te enseñaré un ejemplo de los métodos ya mencionados.

```rb
# Primero asignare una String a una variable, llamada nombre.
nombre = "Monspeet"

# Downcase
nombre.downcase
# => "monspeet"

# Upcase
nombre.upcase
# => "MONSPEET"

# Capitalize
nombre.capitalize
# => "Monspeet"

# Length
nombre.lenght
# => 8
```

## Variables
En Ruby los valores de las variables se asignan de forma automática (strings, int, boolean), lo cual hace mucho más rápido hacer el código. Existen 5 tipos distintos de variables; normales, constantes, globales, de instancia y de clase (estas últimas 2 las veremos más adelante).

Si ya vienes con conocimientos previos de algún otro lenguaje posiblemente ya conozcas los primeros dos tipos, si no es así, acá aprenderás sus características. Cabe destacar que las variables deben empezar siempre con una letra, no pueden ser establecidas con números o símbolos (a excepción de las variables globales que inician con `$`, variables de instancia que inician con `@` y variables de clase que inician con `@@`).

- Variable normal.

Las variables normales son aquellas que son completamente minúsculas, como cualquier variable puede contener cualquier tipo de dato y el mismo ser reemplazado.

```rb
# Asignando el valor
nombre = "Monspeet"

# Reemplazando el valor
nombre = "Lauuu"
```

- Variable constante.

Las variables constantes empiezan o son completamente mayúsculas, y al igual que una variable normal puede contener cualquier tipo de dato. Si vienes de otro lenguaje, las variables constantes de Ruby tienen una diferencia a las de lenguajes como JavaScript, esta diferencia es que en Ruby, dichas variables pueden cambiar sus valores.

```rb
OCUPACION = "administrador"
# O también es válido
Ocupacion = "administrador"
```

- Variables Globales.

Una variable global tiene un nombre que comienza con el símbolo `$`. Se puede utilizar en cualquier parte de un programa, aunque se debe evitar usar mucho una variable global debido a que podría dificultar localizar errores.

```rb
$conocimientos = "Ruby, BASH, JS"
```

## Comentarios
Los comentarios son una parte del código que nos sirve para documentar y llevar un orden sobre qué hace cada línea de código. Cabe destacar que, el programa no los lee así que no los ejecuta, lo cual no nos causará problemas.

Los comentarios en Ruby, son 2 tipos al igual que en el resto de lenguajes. Comentario de una línea y, comentario de múltiples líneas. Además, en Ruby para que los comentarios de múltiples líneas funcionen, no deben tener indentaciones (espacios).

- Comentarios de una línea.

Estos comentarios son aquellos que usan `#`.

```rb
# Esto es un comentario de una línea
# No es leído por el programa
```

- Comentarios de múltiples líneas.

Son aquellos que empiezan con `=begin` y terminan con `=end`. Y que como hemos mencionado anteriormente, obedecen a una regla para funcionar.

```rb
# Uso correcto, sin indentaciones
=begin
Esto es
un comentario de
múltiples líneas
=end

# Uso incorrecto, con indentaciones
  =begin
  Esto es
  un comentario de
  múltiples líneas
  =end
```

## Introduciendo datos
Probablemente hayas visto en algunos programas que se solicita al usuario que ingrese algún dato y luego este es guardado y hayas querido saber cómo hacerlo. Este proceso se llama prompt.

Pues en Ruby esto es un trabajo sencillo y muy cómodo de realizar, para ello utilizaremos `gets`. Es una función que obtiene datos ingresados por el usuario en la terminal. Y sin más preámbulo, te dejaré un ejemplo.

```rb
# Archivo.rb
print "Ingresa tu nombre: "
nombre = gets
puts "Tu nombre es #{nombre}"

# Terminal
$ ruby Archivo.rb
Ingresa tu nombre: Monspeet
Tu nombre es Monspeet
```

Ya visto el ejemplo de su funcionamiento, procederemos a aprender su método `chomp`. Por defecto, `gets` obtiene los datos y les agrega un salto de línea. Por ello debemos utilizar `chomp`, ya que su función es eliminar los saltos de línea.

## Ejercicio
Como ya hemos visto en todo este módulo lo básico de Ruby, podremos proceder a realizar un ejercicio con lo aprendido para reforzar nuestros aprendizajes.

Dicho ejercicio constará de crear un programa que obtenga los siguientes datos del usuario y los muestre en pantalla: nombre, edad, país.