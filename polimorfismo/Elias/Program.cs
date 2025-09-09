using System;
using Elias.utils;
using Elias.utils.figuras;

class Program
{
    static void Main(string[] args)
    {
        Calculadora calc = new Calculadora();

        int resultado1 = calc.Sumar(3, 5);
        double resultado2 = calc.Sumar(2.5, 4.3);
        int resultado3 = calc.Sumar(1, 2, 3);

        Console.WriteLine("Suma de enteros: " + resultado1);
        Console.WriteLine("Suma de punto flotante: " + resultado2);
        Console.WriteLine("Suma de tres enteros: " + resultado3);

        List<Figura> figuras = new List<Figura>();
        {
            new Circulo(5);
            new Rectangulo(4, 6);
        }

        foreach (var figura in figuras)
        {
            figura.dibujar();
            Console.WriteLine($"Área de la figura: {figura.Area()}");
        }

        Caja<string> caja1 = new Caja<string>();
        caja1.Guardar("Hello world");
        Console.WriteLine("Contenido de la caja 1: " + caja1.Abrir());

        Metro m = 10.5;
        double d = (double)m;
        Console.WriteLine("Valor en metros: " + d);
    }
}