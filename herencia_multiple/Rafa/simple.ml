class person (name: string) = object
  val mutable name = name

  method get_name = name
end;;

class student (name: string) = object
  inherit person name
  method study = print_endline (_name ^ "Studying")
end;;

class teacher (name: string) = object
  inherit person name
  method teach = print_endline (_name ^ "Teaching")
end;;

let emilio = new student "Emilio";;
emilio#study;;

let magdiel = new teacher "Magdiel";;
magdiel#teach;;