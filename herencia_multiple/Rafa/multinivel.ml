class animal = object
  method eat = print_endline "Eating"
end;;

class mammal = object
  inherit animal
  method feed_offspring = print_endline "alimentando a la cría"
end;;

class dog = object
  inherit mammal
  method bark = print_endline "Woof!"
end;;

let d = new dog;;
d#eat;;
d#feed_offspring;;
d#bark;;