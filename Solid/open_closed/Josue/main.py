import DescuentoFrecuente
import DescuentoNavidad

# Implementacion correcta

def main():

    # Aqui falta la implementación de todas por un tipo de interfaz común
    # Por ejemplo, una interfaz Descuento con el método aplicar_descuento
    frecuente = DescuentoFrecuente.DescuentoFrecuente()
    print(frecuente.aplicar_descuento(100))  # 90.0
    navidad = DescuentoNavidad.DescuentoNavidad()
    print(navidad.aplicar_descuento(100))  # 80.0

if __name__ == "__main__":
    main()