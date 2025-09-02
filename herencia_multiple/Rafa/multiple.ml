class swimmer = object
  method swim = print_endline "Swimming"
end;;

class cyclist = object
  method cycle = print_endline "Cycling"
end;;

class runner = object
  method run = print_endline "Running"
end;;

class triathlete = object
  inherit swimmer
  inherit cyclist
  inherit runner
  method compete = print_endline "Competing in a triathlon"
end;;

let t = new triathlete;;
let () = print_endline "Triathlete actions:";;
t#swim;;
t#cycle;;
t#run;;
t#compete;;