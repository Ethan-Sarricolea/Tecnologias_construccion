// Codigo de mi compañero Erick

export abstract class Animal {     // Clase abstracta

    constructor(public name: string, public species: string) {}   //constructor

    abstract makeSound(): void;   // Método abstracto

    dormir(): void {   // Método concreto
        console.log(`${this.name} está durmiendo.`);
    }

    getName(): string {   // Método concreto
        return this.name;
    }
}