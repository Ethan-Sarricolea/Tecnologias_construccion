
namespace ejemplo
{
    public class Program
    {
        public void Main()
        {
            Empleado emp1 = new EmpleadoTiempoCompleto();
            Empleado emp2 = new Pasante();

            Console.WriteLine("Empleado");
            Console.WriteLine($"Salario {emp1.CalcularSalario()}");

            Console.WriteLine("Pasante:");
            try
            {
                Console.WriteLine($"Salario {emp2.CalcularSalario()}");   
            }
            catch (InvalidOperationException e) {
                
            }
        }
    }
}