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

def talk(animal):
    print(animal.talk())

def main():
    talk(Dog())
    talk(Cat())
    talk(Animal())  # This will raise an error

if __name__ == "__main__":
    main()