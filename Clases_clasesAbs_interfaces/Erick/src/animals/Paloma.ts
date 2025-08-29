import { Animal } from "./Animal";
import {Volador} from "../skills/Volador";

export class Paloma extends Animal implements Volador {   // Clase concreta que extiende de Animal e implementa Volador

    constructor(name: string) {
        super(name, "Paloma");   // Llamada al constructor de la clase base
    }

    makeSound(): void {   // Implementación del método abstracto
        console.log("Coo Coo");
    }


    volar(): void {   // Implementación del método de la interfaz Volador
        console.log(`${this.name} está volando.`);
    }
}