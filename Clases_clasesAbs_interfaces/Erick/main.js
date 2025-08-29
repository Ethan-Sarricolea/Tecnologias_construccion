"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gato_1 = require("./src/animals/gato");
var Paloma_1 = require("./src/animals/Paloma");
var Pato_1 = require("./src/animals/Pato");
var gato = new gato_1.Gato("Felix");
gato.makeSound(); // Salida: Miau 
var paloma = new Paloma_1.Paloma("Paco");
paloma.makeSound(); // Salida: Coo Coo
paloma.volar(); // Salida: Paco está volando.
var pato = new Pato_1.Pato("Donald");
pato.makeSound(); // Salida: Quack Quack
pato.volar(); // Salida: Donald está volando.
