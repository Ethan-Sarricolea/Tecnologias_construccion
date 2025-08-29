"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pato = void 0;
var Animal_1 = require("./Animal");
var Pato = /** @class */ (function (_super) {
    __extends(Pato, _super);
    function Pato(name) {
        return _super.call(this, name, "Pato") || this; // Llamada al constructor de la clase base
    }
    Pato.prototype.nadar = function () {
        throw new Error("Nadando");
    };
    Pato.prototype.makeSound = function () {
        console.log("Cuac Cuac");
    };
    Pato.prototype.volar = function () {
        console.log("".concat(this.name, " est\u00E1 volando."));
    };
    return Pato;
}(Animal_1.Animal));
exports.Pato = Pato;
