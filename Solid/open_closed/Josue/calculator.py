
# Mal ejemplo (modifica la función original)

def calcular_descuento(type: str, precio: float) -> float:
    if type == "navidad":
        return precio * 0.2
    elif type == "frecuente":
        return precio * 0.3
    elif type == "otro":
        return precio
    else:
        return precio
    
print(calcular_descuento("navidad", 100))  # 80.0
print(calcular_descuento("frecuente", 100))  # 70.0
print(calcular_descuento("otro", 100))  # 100.0