import DescuentoFrecuente
import DescuentoNavidad

# Implementacion correcta

def main():
    frecuente = DescuentoFrecuente.DescuentoFrecuente()
    print(frecuente.aplicar_descuento(100))  # 90.0
    navidad = DescuentoNavidad.DescuentoNavidad()
    print(navidad.aplicar_descuento(100))  # 80.0

if __name__ == "__main__":
    main()