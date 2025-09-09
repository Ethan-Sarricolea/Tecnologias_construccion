class Animal:        
    def talk(self):
        # print("Animal talking...")

        # Si la funcion  no se implementa da error
        raise NotImplementedError("Subclasses must implement this method")

class Dog(Animal):
    def talk(self):
        return "Woof!"

class Cat(Animal):
    def talk(self):
        return "Meow!"

class Caja:
    def __init__(self):
        self._items = [] # Lista para almacenar los elementos

    def add_item(self, item):
        self._items.append(item)

    def first_item(self):
        if self._items:
            return self._items[0]
        return None

def talk(animal):
    print(animal.talk())

def main():
    # talk(Dog())
    # talk(Cat())
    # talk(Animal())  # This will raise an error

    c1 = Caja()
    c1.add_item(Dog())
    print(c1.first_item().talk())  # Output: Woof!

if __name__ == "__main__":
    main()