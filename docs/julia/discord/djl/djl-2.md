---
id: djl-2
title: Primeros pasos
sidebar_label: Primeros pasos  
---


# Índice

## Introducción
**[discord.jl](https://posts.xh4h.com/Discord.jl/dev/)** es la solución para desarrollar bots con el lenguaje de programación **[Julia](https://julialang.org/)**.

### Requisitos
* [Julia](https://julialang.org/downloads/)

#### Julia
`Julia` es un lenguaje de programación homoicónico, multiplataforma y multiparadigma de tipado dinámico de alto nivel y alto desempeño para la computación genérica, técnica y científica, con una sintaxis similar a la de otros entornos de computación similares.

Para corroborar que `Julia` está instalado correctamente escribiremos en una consola `julia --ver`

#### Instalación
Para empezar a desarrollar su bot necesitará crear un carpeta donde se ubicarán todos sus archivos.

  * **Windows:** Luego abra un `cmd` (Win + R y escriba "cmd" en ejecutar) y abrirá la ruta donde se encuentra la carpeta con el comando `cd`, ejemplo:
  ```bash
  cd desktop/bot
  ```
  * **Linux:** Luego de esto, deberá abrir la `terminal` (Aplicaciones»Accesorios»Terminal) y abrirá la ruta donde se encuentra la carpeta con el comando `cd`, ejemplo:
  ```bash
  cd desktop/bot
  ```

En la misma consola que hemos abierto tipearemos `julia` para abrir el `REPL`.
```bash
julia #Abrirá el REPL.
```
Luego entraremos al modo `pkg` escribiendo `]`.
```bash
julia> ]
```
Una vez estemos situados en el pkg, debemos añadir la librería escribiendo lo siguiente:
```bash
pkg> add https://github.com/Xh4H/Discord.jl
```
Esto comenzará a instalar `discord.jl` en su directorio. Si no hubo ningún mensaje de error al finalizar la instalación, es hora de programar su bot.

## Primer bot
Con todo instalado estamos listos para comenzar a utilizar `discord.jl`. Esta sección cubrirá lo básico para iniciarse en la librería. Abarcaremos conceptos simples, algunos eventos y ejemplos de uso.

Primero debemos crear un archivo con extensión `.jl` (Ej: `MiBot.jl`) y abrirlo con nuestro editor de código de preferencia.

Luego debemos importar `discord.jl` en nuestro archivo de la siguiente manera:
```julia
using Discord
```

> **Nota:** También puede importar **Discord.jl** mediante `import`, pero en esta guía utilizaremos la manera definida arriba.

#### Discord Client
El cliente es el principal punto de interacción de `discord.jl` con la API de discord. Debemos definirlo de la siguiente manera:
```julia
c = Client("token"; presence=(game=(name="Julia", type=AT_GAME),))
```

En ese ejemplo definimos el cliente añadiendole el `token` de tu `bot` como parámetro. Adicionalmente agregamos un parámetro que cambiará la presencia de nuestro bot a `Jugando a Julia`.

Para comprobar que todo ha salido bien definiremos el evento `Ready` que se emite cuando nuestro bot se pone en línea.
```julia
handler(::Client, e::Ready) = println("Estoy en línea!")
add_handler!(c, Ready, handler)
```

  * Con `handler()` definimos nuestro evento `ready`. Dentro de él van los parámetros para el mismo.
  * Con `add_handler!()` añadimos el handler para ser interpretado por `discord.jl`.

> **Nota:** Puede ver todos los parámetros para `add_handler!()` [aquí](https://posts.xh4h.com/Discord.jl/dev/client/#Event-Handlers-1).

Si en la consola se imprime `Estoy en línea!`, todo salió perfecto.

#### Mensajes
Ahora que nuestro bot está en línea comprobaremos su funcionamiento haciendo que reciba y envie mensajes. Para ellos tenemos que definir el evento `MessageCreate` que se emite siempre que se envie un mensaje.
```julia
function handler(c::Client, e::MessageCreate)
  if e.content == "ping"
    reply(c, m, "Pong!")
end
```
