class worker (name:string) (income:float)=
  object
    val mutable name = name
    val mutable income = income
    method get_name = name
    method get_income = income
end;;

class chief (name:string) (income:float)=
  object
    inherit worker name income
    method manage_team = print_endline (name ^ " is managing the team")
end;;

class programmer (name:string) (income:float)=
  object
    inherit worker name income
    method code = print_endline (name ^ " is coding")
end;;

class accountant (name:string) (income:float)=
  object
    inherit worker name income
    method manage_accounts = print_endline (name ^ " is managing accounts")
end;;

let jessica = new chief "Jessica" 100.5.;;
let rafa = new programmer "Rafa" 50.5.;;
let jair = new accountant "Jairo" 20.5.;;

jessica#get_name;;
rafa#get_income;;
jair#get_name;;

jessica#manage_team;;
rafa#code;;
jair#manage_accounts;;