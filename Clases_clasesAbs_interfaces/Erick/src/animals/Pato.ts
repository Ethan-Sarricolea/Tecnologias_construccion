import { Animal } from "./Animal";
import {Volador} from "../skills/Volador";
import {Nadador} from "../skills/Nadador";


export class Pato extends Animal implements Volador, Nadador {   // Clase concreta que extiende de Animal e implementa Volador
    constructor(name: string) {
        super(name, "Pato");   // Llamada al constructor de la clase base
    }
    nadar(): void {
        throw new Error("Nadando");
    }
    makeSound(): void {   // Implementación del método abstracto
        console.log("Cuac Cuac");
    }
    volar(): void {   // Implementación del método de la interfaz Volador
        console.log(`${this.name} está volando.`);
    }
}