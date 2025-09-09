# Single Responsability

Como indica el nombre, estableque que una clase deb tener una sola responsabilidad

Se concibe como: 
    Un modulo tiene una, y solo una razón para cambiar

No se debe confundir con "Una funcion debe hacer una, y solo una, cosa. Este principio existe pero no es SRP"

### Interpretación

El software se modifica para satisfacer a los usuarios y stackeholders

Cuando escribimos codigo lo escribimos para los usuarios, **un modulo deberia responsqbilizarse ante un actor y solo un actor**.

#### Ejemplo

Imagina una clase Employee en una aplicación de nomina, La clase viola el principio porque los metodos se responsabilizan de 3 equipo/tipos de actores diferentes utilizan las rutinas, y las moficiaciones por parte de uno afectan a los otros.

Al fusionar involucra riesgos que se pueden evitar.

##### Solución

Se puede separar la informacion de los empleados de los diferentes metodos que sirven a diferentes actores

Patrón Facade.

Tener una interfaz de acceso a cada clase para separar

```kotlin
class Employee (
    private val ID: Int,
    private val name: String,
    private val hoursWorked: Int,
    private val salary: Double
) {
    fun calculatePay(): Double {
        val  ordinaryHours = regularHours()
        return (hoursWorked * ordinaryHours).toDouble()
    }

    fun reportHours(): String {
        val ordinaryHours = regularHours()
        return "Employee $name worked $ordinaryHours ordnary hours";
    }

    fun save() {
        print("Saving employee $name to database...")
    }

    fun regularHours(): Int {
        return if (hoursWorked > 40) 40 else hoursWorked
    }
}
```

Esta mal porque la modificacion de la funcion regularHours afecta a todos si es que un grupo requiere de modificarla.

#### Con FACADE

se vuelven muchas clases y separan responsabilidades

Importancia de SRP

- Es mas facil probar
- Es mas facil de entender
- Facilita los cambios

Consecuencias de no seguirlo

- Los cambios pueden generar errores
- Dificil de mantener y extender
- Es mas complejo saber que hace
- Genera un alto acomplamiento


```