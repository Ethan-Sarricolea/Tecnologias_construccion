from abc import ABC as abs, abstractmethod

class Descuento(abs):
    def __init__(self):    
        pass
    
    @abstractmethod
    def aplicar_descuento(self, monto):
        pass