import { Gato } from "./src/animals/gato";
import { Paloma } from "./src/animals/Paloma";
import { Pato } from "./src/animals/Pato";

const gato = new Gato("Felix");
gato.makeSound();  // Salida: Miau 

const paloma = new Paloma("Paco");
paloma.makeSound();  // Salida: Coo Coo
paloma.volar();     // Salida: Paco está volando.

const pato = new Pato("Donald");
pato.makeSound();  // Salida: Quack Quack
pato.volar();     // Salida: Donald está volando.