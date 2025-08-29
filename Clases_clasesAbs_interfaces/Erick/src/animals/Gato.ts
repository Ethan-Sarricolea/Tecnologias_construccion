import { Animal } from "./Animal";

export class Gato extends Animal {   // Clase concreta que extiende de Animal

    constructor(name: string) {
        super(name, "Gato");   // Llamada al constructor de la clase base
    }

    makeSound(): void {   // Implementación del método abstracto
        console.log("Miau");
    }
}