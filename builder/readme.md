# Builder pattern

Es un patron de diseño creacional que permite un enfoque de construccion de objetos completos paso a paso

Separa el proceso de construccion de un objeto de su representacion

permite constriir diferentes tipos y representaciones de un objeto usando el mismo codigo.

No usaremos new, sino 

## Situaciones

Aplica cuando, por ejemplo, construimos un objeto que requiere muchos atributos para una instancia.

- User (name, age, mail, number, direction)

Dejar muchas partes en null durante la instancia puede ser confuso.

### Enfoque

- Sobrecarga / telescoping: de constructor, es decir, crear una sobrecarga que genere los atributos en null, y seguir sobrecargando dependiendo el caso.

- Cuando tenemos objetos similares y con pasos de construccion comun, dividirlo en una interfaz que tenga los pasos de construccion común

- Composite tree: omitir ejecucion de algunos pasos sin afectar el producto final
    - llamara a los pasos de forma recursiva, util para un arbol de objetos.

## Estructura:

```Mermaid
classDiagram
    class Cliente {
        +main()
    }

    class Director {
        -builder : Builder
        +setBuilder(b : Builder)
        +construirProducto()
    }

    class Builder {
        <<interface>>
        +reset()
        +buildParteA()
        +buildParteB()
        +getResultado() : Producto
    }

    class ConcreteBuilder1 {
        -producto : Producto1
        +reset()
        +buildParteA()
        +buildParteB()
        +getResultado() : Producto1
    }

    class ConcreteBuilder2 {
        -producto : Producto2
        +reset()
        +buildParteA()
        +buildParteB()
        +getResultado() : Producto2
    }

    class Producto1 {
    }

    class Producto2 {
    }

    Cliente --> Director
    Director --> Builder
    Builder <|.. ConcreteBuilder1
    Builder <|.. ConcreteBuilder2
```

## Beneficios

- LUEGO

## Consideraciones

- Requiere mayor conocimiento del cliente
- El codigo aumenta en cimplejidad debido a las clases del patrón

## Diferencias con factory

- Factory es una familia de objetos

- Builder se centra en construir objetos paso a paso.

### Ejemplo: builder de url