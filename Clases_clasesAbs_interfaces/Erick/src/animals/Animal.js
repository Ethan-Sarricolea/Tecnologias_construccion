"use strict";
// Codigo de mi compañero Erick
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    } //constructor
    Animal.prototype.dormir = function () {
        console.log("".concat(this.name, " est\u00E1 durmiendo."));
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
exports.Animal = Animal;
