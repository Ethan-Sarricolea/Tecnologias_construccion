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
exports.Paloma = void 0;
var Animal_1 = require("./Animal");
var Paloma = /** @class */ (function (_super) {
    __extends(Paloma, _super);
    function Paloma(name) {
        return _super.call(this, name, "Paloma") || this; // Llamada al constructor de la clase base
    }
    Paloma.prototype.makeSound = function () {
        console.log("Coo Coo");
    };
    Paloma.prototype.volar = function () {
        console.log("".concat(this.name, " est\u00E1 volando."));
    };
    return Paloma;
}(Animal_1.Animal));
exports.Paloma = Paloma;
