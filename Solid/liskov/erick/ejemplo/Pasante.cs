
namespace ejemplo;

public class Pasante : Empleado
{
    public override decimal CalcularSalario()
    {
        throw new NotImplementException("Los pasantes  no tienen salario");
    }

    public override void Trabajar()
    {
        Console.Write("Chambeando y aorendiendo");
    }
}