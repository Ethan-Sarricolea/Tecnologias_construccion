from Descuento import Descuento

class DescuentoNavidad(Descuento):
    def __init__(self):
        super().__init__()
    
    def aplicar_descuento(self, monto: int) -> float:
        return monto * 0.80  # Aplica un descuento del 20%
