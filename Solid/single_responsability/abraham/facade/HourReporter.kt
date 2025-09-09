class HourReporter {
    fun reportHours(employee: Employee): String {
        val ordinaryHours = regularHours(employee)
        val nonOrdinaryHours = employee.hoursWorked - ordinaryHours
        return "Employee ${employee.name} worked $ordinaryHours ordinary hours and $nonOrdinaryHours non-ordinary hours"
    }

    private fun regularHours(employee: Employee): Int {
        return if (employee.hoursWorked > 40) 40 else employee.hoursWorked
    }

}