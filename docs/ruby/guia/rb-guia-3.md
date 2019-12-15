---
id: rb-adentrandonos mas
title: Adentrándonos más en el lenguaje
sidebar_label: Algo más complejo
---

## Funciones
Las funciones son un conjunto de líneas de código que realizan tareas específicas y que retornan un valor. Las funciones también pueden tener parámetros que modifiquen su funcionamiento.

Las funciones en Ruby se inician mediante `def nombre` y cierran con `end`. Estas pueden realizar múltiples tareas y pueden ser anidadas dentro de otras funciones sin problemas. ¡Las funciones también se pueden iniciar dentro de clases y módulos!

```rb
# Ejemplo de funciones
def funcion
    puts "¡Esta es una función!"
end

# Las funciones se ejecutan con su nombre.
funcion # => "¡Esta es una función!"
```

#### Funciones con parámetros
Las funciones también pueden tener parámetros que alteren su funcionamiento, y sean de mayor utilidad. A continuación te daré un breve ejemplo para que entiendas mejor la idea con una pequeña explicación.

```rb
# Iniciaremos una función con el parámetro nombre.
def persona(nombre)
    nombre = nombre # Aquí asignamos un valor al parámetro con una variable que almacene el valor del parámetro.
    puts "Hola, #{nombre}!" # Aquí vamos a mostrar el resultado.
end

persona("Monspeet")

# Ahora, vamos a ver su funcionamiento.
Hola, Monspeet!
```

## Rangos
En Ruby existe una característica llamada **Rangos**, la cual tiene el funcionamiento de crear secuencias tanto numéricas como de Strings. A continuación veremos algunos ejemplos.

```rb
# Nota: to_a es un método que convierte a Array. Lo veremos más adelante.

# Rango con ambos puntos límites incluídos
(1...5).to_a # Utilizamos to_a ya que los rangos no son almacenados como una lista y con dicho método los volvemos un array que es igual a una lista.
# => Secuencia: [1, 2, 3, 4, 5]

# Rango sin ambos puntos límites incluídos
(1...5).to_a # No se incluye el último punto límite, es decir, el 5.
# => Secuencia: [1, 2, 3, 4]

# Rango de Strings.
("a".."f")
# => Secuencia: ["a", "b", "c", "d", "e", "f"]
```

#### Métodos para los rangos
Los rangos en Ruby tienen métodos, algunos de ellos son los siguientes.

```rb
# Iniciamos un rango en una variable
numeros = (1..5)
numeros.include?(3) # => true | Retorna verdadero, ya que el rango contiene dicho número.
numeros.min # => 1 | Valor mínimo del rango.
numeros.max # => 5 | Valor máximo del rango.
```

También podemos utilizar el operador `===` para comprobar si un determinado valor se encuentra dentro de la secuencia del rango.

```rb
(1..5) === 5 # => true
("a"..."f") === "f" # => false
```

## Arrays
Un Array es un conjunto ordenado, y cada elemento que contiene es una variable que se puede leer y escribir/reescribir.

Los Arrays se inician con llaves `[ ]` y en Ruby inician desde la posición 0.

Cuando se almacena un valor en un Array, se dan dos objetos: índice y valor. Y posteriormente se puede obtener dicho valor gracias al índice.

```rb
# Iniciaremos un Array y leeremos sus objetos.
array = [1, 2, 3, 4, 5]

array[0] # => 1
array[1] # => 2
array[2] # => 3
array[3] # => 4
array[4] # => 5

# Si el objeto no existe, retornará nil (null en otros lenguajes)
array[5] # => nil

# Ahora, podemos agregar más objetos al Array, asignando valores específicos o usando el método push

array[5] = 6
# => [1, 2, 3, 4, 5, 6]

array.push(7)
# => [1, 2, 3, 4, 5, 6, 7]
```

Los Array también pueden anidarse, es decir, pueden haber arrays dentro de arrays.

```rb
array = [1, 2, 3, ["uno", "dos", "tres"]]
array[3] # => ["uno", "dos", "tres"]
array[3][0] # => "uno"
```

#### Facilitando su creación
Sabemos muy bien que crear Arrays suele ser una tarea tediosa debido a la colocación de comillas y comas, sin embargo, ¡Ruby tiene la solución para ello!

`%w` es aquello que nos va a facilitar crear Arrays, pues automatiza la colocación de comillas y comas.

```rb
array = ["esto", "es", "tedioso", "lol"]
array # => ["esto", "es", "tedioso", "lol"]

array = %w[esto es sencillo]
array = ["esto", "es", "sencillo"]
```

## Hashes
Los hashes, también conocidos como mapas o diccionarios, se parecen a los Arrays ya que son una colección de objetos indexadas. Sin embargo, en los hashes los índices pueden indexar con cualquier tipo de dato, a diferencia de los Arrays donde los índices son sólo numéricos.

Los hashes en comparación a los Arrays, tienen una gran y significante ventaja, la cual es que se puede usar cualquier objeto como índice, pudiendo así tener un código más legible. Sin embargo, en los hashes los elementos no están ordenados.

```rb
hash = {'ceo' => 'Lauuu', 'admin' => 'Monspeet'}
# => {'ceo' => 'Lauuu', 'admin' => 'Monspeet'}
puts hash['ceo'] # => 'Lauuu'
```
### Usando símbolos como índices
#### Símbolos
Los símbolos se parecen a las variables, pero éstos están precedidos de dos puntos `:`.

```rb
:nombre
:edad
```

Debido a las ventajas anteriormente mencionadas, se utilizan símbolos como índices.

```rb
hash = {:ceo => 'Lauuu', :admin => 'Monspeet'}
# => {:ceo => 'Lauuu', :admin => 'Monspeet'}
puts hash[:ceo] # => 'Lauuu'
```
También puedes crear hashes con el método `new` de la clase `Hash`.

```rb
calificaciones = Hash.new
calificaciones["Monspeet"] = 10
# => {"Monspeet" => 10}
```

Puedes ver todos los métodos de la clase `Hash` [aquí]("https://ruby-doc.org/core-2.6.5/Hash.html`)

## Bloques 
Los bloques de código son porciones de código con una o más declaraciones y sentencias. Los bloques de código se encuentran dentro de llaves `{}` o `do...end`.

Los bloques están hechos para agrupar instrucciones y sólo se pueden usar luego de un método.

### Yield
Los métodos pueden utilizar los bloques mediante la palabra clave `yield`.

```
def administradores
    puts "Monspeet"
    yield
    puts "Devsaider"
end

# => :metodo

metodo { puts "Lauuu" }

=begin
=> "Monspeet"
=> "Lauuu"
=> "Devsaider"
=end
```

En Ruby, los bloques de código entre `{}` suele usarse sólo para una línea de código, mientras que los bloques de código entre `do...end` suele usarse para varias líneas de código.

## Condicionales
Las condicionales son aquellos bloques que realizan ciertas acciones dependiendo de situaciones específicas en nuestro código. Sus palabras clave son `if`, `else`, `elsif` y `case`. Y como las funciones en Ruby, terminan con un `end`. Además, al igual que las funciones, ¡pueden anidarse una dentro de otra sin problema!

Las condicionales son mucho más sencillas de lo que parecen, así que sin más preámbulo, veamos un ejemplo de una estructura IF/ELSIF.

### IF / ELSIF
```rb
# Crearemos una variable, que contenga el valor 5.
numero = 5

=begin
Luego, crearemos nuestra condicional.
Si el número es inferior a 5, retornará falso.
Si el número es superior a 5, retornará falso.
Si el número es igual a 5, retornará verdadero.
En ese mismo orden estará estructurado.
=end

if numero < 5
    false
elsif numero > 5
    false
elsif numero == 5
    true
end

# => true
```

### IF / ELSE IF
```rb
numero = 5

if numero < 5
    if numero >= 3
        puts "El número es mayor o igual a 3, pero menor a 5"
    end
else if numero >= 5
    puts "El número es mayor o igual a 5"
end

# => "El número es mayor o igual a 5"
```

### Diferencias IF/ELSIF - IF/ELSE IF
|    IF / ELSIF    |    IF / ELSE IF    |
|:------:|:------|
|    Se utiliza cuando se requieren 2 o más **condiciones no anidadas**.    |    Se utiliza cuando se requieren **condiciones anidadas** dentro de otras condiciones.    |
|    Tienen un solo cierre, y pueden utilizar else.    |    Cada **IF/ELSE IF** tiene su cierre propio, y pueden utilizar else.    |

### Operadores condicionales
Los operadores están presentes en todos los lenguajes, y sirven para realizar condicionales. Dichos signos (operadores condicionales) son los siguientes.

|    Signo    |    Significado    |
|:------:|:------|
|    ==    |    Igual a    |
|    !=    |    Distinto    |
|    ===    |    Conjunto    |
|    >    |    Mayor que    |
|    <    |    Mayor que    |
|    >=    |    Igual o mayor    |
|    <=    |    Igual o menor    |

### Condicionales negativas
Las condicionales negativas son aquellas condicionales cuya finalidad es retornar un valor cuando no se espera el resultado especificado en ella, si no, un valor alterno.

Para estas condicionales, utilizamos el operador `!=` (Distinto).

```rb
numero = 4

if numero != 5
    puts "El valor de la variable numero no es 5!"
else
    puts "El valor de la variable numero es 5!"
end

# => "El valor de la variable numero no es 5!", es decir, true.
```

### UNLESS
Unless es el lado oscuro de `IF`, ya que con `IF` el bloque se ejecuta cuando la condición se cumple; con `unless` el bloque se ejecuta cuando la condición **no se cumple**.

Unless es igual a una condicional estructurada por `IF`. (do ... end), ¡así que no habrá dolores de cabeza!

```rb
nombre = "Monspeet"

unless nombre == "Lauuu"
    puts "Tu nombre no es Lauuu."
end

# => "Tu nombre no es Lauuu."
```

### Case
Case, conocido como `switch` en otros lenguajes, es una instrucción similar a `if` en la cual se crean una serie de condicionales en las donde se ejecuta la primera condicional que se cumpla.

Case utiliza la palabra clave `when` para crear sus condicionales.

```rb
num1 = 5
num2 = 5

suma = num1 + num2

case suma
when 8 then
    puts "El resultado es 8"
when 10 then
    puts "El resultado es 10"
end

# => "El resultado es 10"
```

## Bucles
Los bucles son bloques de código que se ejecutan un número específico de veces. Ruby en particular, tiene algunos bucles más además de los tradicionales (while, do...while, for), dichos bucles son (until, loop). Sin embargo, **Ruby no posee el bucle do...while**

A continuación, veremos cada uno de esos bucles.

### While
While es un bucle el cual verifica la condición antes de ejecutar el código y se detiene cuando la condición retorna `false`.
```rb
numero = 0

while numero < 5
    puts "La variable numero es #{numero}"
    numero += 5
end

=begin
=> La variable numero es 0
=> La variable numero es 1
=> La variable numero es 2
=> La variable numero es 3
=> La variable numero es 4
=end
```


### Until
Until podríamos llamarlo como "bucle de unless", debido a que es igual; mientras la condición sea falsa, se cumplirá.

```rb
numero = 0

until numero > 5
    puts "La variable numero es #{numero}"
    numero += 1
end

=begin
=> La variable numero es 0
=> La variable numero es 1
=> La variable numero es 2
=> La variable numero es 3
=> La variable numero es 4
=> La variable numero es 5
=end
```

### Loop
El bucle de Loop, consiste en el ciclado indefinido del bloque de código ó una instrucción. La única forma de detenerlo es usando la palabra clave `break`.

```rb
numero = 0

loop do
    puts "La variable numero es #{numero}"
    numero += 1
    break if numero > 5
end

=begin
=> La variable numero es 0
=> La variable numero es 1
=> La variable numero es 2
=> La variable numero es 3
=> La variable numero es 4
=> La variable numero es 5
=end
```

### For
Por último, tenemos al bucle `for` que a pesar de confundir un poco al inicio, es realmente sencillo.

Mientras que en otros lenguajes For usa la sintaxis `for (i=0; i<5; i++)`, en Ruby se simplifica, ¡limitándose al nombre de la variable y el intervalo!

```rb
for i in (0..5)
    puts "El valor es #{i}"
end

=begin
=> El valor es 0
=> El valor es 1
=> El valor es 2
=> El valor es 3
=> El valor es 4
=> El valor es 5
=end
```

### Comandos
En los bucles de Ruby, poseemos ciertas palabras clave o comandos que nos podrán ser de utilidad.

| palabra clave | Significado |
|:------:|:------:|
|    break    |    Finaliza el bucle    |
|    next    |     Se adelanta a la siguiente interacción del bucle      |
|    redo    |    Se repite el bucle ignorando la verificación de la condición    |
|    retry    |    Se repite el bucle tomando en cuenta la verificación de la condición    |

## IRB
La IRB es una REPL (**read-eval-print-bucle** / **leer-evaluar-imprimir-bucle**) hecha en Ruby, para dicho lenguaje. Una REPL es también conocida como `shell`.

Para utilizar esta shell, sólo debemos escribir en nuestra terminal `irb`; para salir de la shell, escribimos `exit`.