from Descuento import Descuento

class DescuentoFrecuente(Descuento):
    def __init__(self):
        super().__init__()
    
    def aplicar_descuento(self, monto: int) -> float:
        return monto * 0.90  # Aplica un descuento del 10%