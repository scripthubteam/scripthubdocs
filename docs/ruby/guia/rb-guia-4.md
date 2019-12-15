---
id: rb-programacion orientada a objetos
title: Programación orientada a objetos (POO)
sidebar_label: Programación orientada a objetos
---

## Introducción
La Programación Orientada a Objetos, como hemos visto al inicio de la guía, es un tipo de programación en el cual todo es un objeto y cada objeto tiene sus atributos, métodos y funciones únicas; también tiene conceptos como las clases, la herencia y más.

Ahora, veremos qué son cada uno de estos conceptos, cómo y cuándo usarlos.

## Objetos
En Ruby, todo es un objeto, es decir, no se declaran tipos de variables o métodos. Los objetos de Ruby siempre pueden modificarse, agregarles métodos posteriormente a su creación, etc... Por lo cual sus comportamientos, pueden alejarse de aquel definido en su clase/método.

Los objetos son contenedores de datos, que a su vez, controlan el acceso a dichos datos. 

## Clases
Las clases son usadas para la construcción de objetos, en otras palabras, es un molde para los objetos. Por ejemplo, podemos crear una clase llamada `Staff` y hacer varios tipos de staff, cada uno con sus propios atributos, métodos.

### Initialize
Initialize es una función de las clases, la cual es ejecutado cuando la clase es ejecutada, en otras palabras, es la parte inicial de una clase.

### Clase Staff
```rb
class Staff
    def initialize
        puts "Estos son todos los staff de ScriptHub: "
    end

    def administradores
        puts "Administradores: Monspeet, Lauuu, Devsaider"
    end

    def moderadores
        puts "Moderadores: Mon, Axel, BulzyKrown"
    end

    def managers
        puts "Manager. Comunidad: gameboy, Josué"
    end

    def tecnicos
        puts "Técnicos: Tati, Agate"
    end
end

staff = Staff.new # Ejecutamos la clase Staff
# => "Estos son todos los staff de ScriptHub: "
staff.administradores
# => "Administradores: Monspeet, Lauuu, Devsaider"
staff.moderadores
# => "Moderadores: Mon, Axel, BulzyKrown"
staff.managers
# => "Manager. Comunidad: gameboy, Josué"
staff.tecnicos
# => "Técnicos: Tati, Agate"
```

## Módulos
Los módulos son similares a las clases, en el hecho de que almacenan una colección de objetos, métodos, funciones y otros módulos. Sin embargo, los módulos no pueden ejecutarse por sí solos, dependen de una clase.

### Utilidad de los módulos
Su primera utilidad es el actuar como una librería, que almacena métodos que no interfieren con otros de diferentes lugares del código. Para que una clase utilice un módulo, debe usar el método `include`.

Su segunda utilidad, sería el de aumentar la funcionalidad de las clases, es decir, si una clase utiliza un módulo, dicha clase podrá utilizar todos los objetos del módulo.

```rb
module Guias
    def Guias.ruby
        puts "Ruby | Estado actual: stable"
    end

    def Guias.python
        puts "Python | Estado actual: beta"
    end

    def Guias.discord
        puts "Discord | Estado actual: alpha"
    end
end

class ScriptHub
    include Guias # Llamamos al módulo Guias

    def initialize
        puts "Listado de guías"
        Guias.ruby
        Guias.python
        Guias.discord
    end
end

guias = ScriptHub.new
=begin
=> Listado de guías
=> Ruby | Estado actual: stable
=> Python | Estado actual: beta
=> Discord | Estado actual: alpha
=end
```

### Utilizando módulos externos
Para utilizar módulos externos, deberemos utilizar `require` junto con el nombre del archivo del módulo en una cadena de Strings.

```rb
# guias.rb
module Guias
    def Guias.ruby
        puts "Ruby | Estado actual: stable"
    end

    def Guias.python
        puts "Python | Estado actual: beta"
    end

    def Guias.discord
        puts "Discord | Estado actual: alpha"
    end
end

# app.rb
require "guias"

class ScriptHub
    include Guias # Llamamos al módulo Guias

    def initialize
        puts "Listado de guías"
        Guias.ruby
        Guias.python
        Guias.discord
    end
end

guias = ScriptHub.new
=begin
=> Listado de guías
=> Ruby | Estado actual: stable
=> Python | Estado actual: beta
=> Discord | Estado actual: alpha
=end
```

## Herencia
La Herencia como su nombre lo indica, consiste en heredar objetos, métodos y funciones de una clase a otra, por ejemplo, de la clase Animales, heredar sus objetos a la clase Perro.

```rb
class Animales
    def ladrar
        puts "Guau, guau!"
    end
    
    def maullar
        puts "Miau, miau!"
    end
end

class Perro < Animales
    def initialize
        ladrar
    end
end

ladrar = Perro.new
# => "Guau, guau!"
```