## Open closed


En 1988, por Robert C. Martin (Uncle bob), lo creo ante la problematica de que cada que un sistema requeria un cambio 


# Que es

Las entidades de Software (Clases, modulos, funciones, etc.) Deben estar abiertas para la extension pero cerradas oara su modificación

Es decir, no se toca el nucleo central, pero debe ser facil extenderlo, no modificarlo.

Se extiende creando nuevs clases o modulos por medio de abstracciones (interfaces, clases abstractas) y polimorfismo.

Minimiza los efectos secundarios cuando el sistema evoluciona.

Crear extensiones que aprovechen la estructura y comportamientos existentes

### Ventajas

- Menor riesgo de introducir errores
- Alta mantenibilidad y escalabilidad
- Facilita las pruebas unitarias
- Favorece el uso de los patrones de diseño (Strategy, decorator, Factory Method)

### Ejemplos

- Plugins de navegadores
- Frameworks (permiten extender sin modificar)
- Videojuegos (Nuevos personajes, polimorfismo, etc)

## Relaciones

Se relaciona con Single Responsability ayudando a mantener responsabilidades claras

- 

- 

