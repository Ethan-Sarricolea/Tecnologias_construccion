

class PayCalculator{
    fun calculatePay(employee: Employee): Double {
        val ordinaryHours = regularHours(employee)
        val nonOrdinaryHours = employee.hoursWorked - ordinaryHours
        return (ordinaryHours * employee.salary + nonOrdinaryHours * employee.salary * 1.5)
    }

    private fun regularHours(employee: Employee): Int {
        return if (employee.hoursWorked > 35) 35 else employee.hoursWorked
    }



}