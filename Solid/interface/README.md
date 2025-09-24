# Interface (ISN)

ISP

Es mejor tener interfaces mas simples que una interfaz gigante

## Surgimiento

Formado por robert C martin

Principio de segregació de interfaces

## Importancia 

Segregar interfaces reduce

## Ventajas

Codigo mas modular, reutilizable, implementaciones mas flexibles yy escalables.
Mantenibilidad
Estabilidad

## Desventajas

No siempre esta claro hasta que punto se debe dividir una interfaz

Si las interfaces estan mal diseñadas...

### Relacion

Ayuda al principio de responsabilidad unica y otros mas

> Segregación habla de dividir o separar

Basicamente crear una interfaz por los metodos compartidos, 

Ejemplo:

Una clase telefono con la información marca, modelo, precio y ram. metodos escribir, llamar, pagar NFC, asistente virtual y desbloqueo biometrico.

Podemos dejar llamar y escribir en la clase telefono (ahora TelefonoBasico), creamos las interfaces asistenteVirtual, DesbloqueoBiometrico y NFC para los metodos especificos con los que algunos telefonos no cuentan y solo implementamos las interfaces en ellos. Por ejemplo:
- Zte2 solo seria un telefonoBasico
- Iphone15 tendria desbloqueo biometrico y asistenteVirtual
- Xiaomi12 tendria desbloqueoBiometrico
