

fun main(){
    val employee = Employee(1, "Abraham", 45, 15.0)
    println("Pay: ${employee.calculatePay()}")
    println(employee.reportHours())
    employee.save()
}