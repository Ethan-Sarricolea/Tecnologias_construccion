## Principio de sustitución de liskov

Su definición formal fue propuesta por Barbara Liskov en 1987 y dice algo como:

>"Si S es un subtipo de T, entonces los objetos de tipo T en un programa pueden ser reemplazados por objetos de tipo S sin alterar las propiedades deseables de ese programa."

Dicho de manera más simple:
Si tienes una clase padre A y una clase hija B, deberías poder usar un objeto de B en cualquier lugar donde se espere un objeto de A sin que el programa deje de funcionar correctamente.

## Ejemplo simple

```python
class Ave:
    def volar(self):
        print("Estoy volando")

class Pinguino(Ave):
    def volar(self):
        raise Exception("Los pingüinos no pueden volar")

``` 

Aunque Pinguino hereda de Ave, no cumple Liskov, porque si en el código alguien espera que todas las Ave puedan volar y recibe un Pinguino, va a romper el comportamiento esperado (excepción).

### Solución

Podríamos replantear la jerarquía:

```python 
class Ave:
    pass

class AveVoladora(Ave):
    def volar(self):
        print("Estoy volando")

class Pinguino(Ave):
    def nadar(self):
        print("Estoy nadando")
```

### Como saber si violamos el principio

Sabemos que violamos el principio si una subclase redefine el metodo de forma que el retorno cambia o si tiene metodos sin usar o que no aplican.

### Como se soluciona la violación

