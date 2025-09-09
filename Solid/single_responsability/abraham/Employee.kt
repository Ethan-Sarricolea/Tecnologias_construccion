/*

*/

class Employee (
    private val ID: Int,
    private val name: String,
    private val hoursWorked: Int,
    private val salary: Double
) {
    fun calculatePay(): Double {
        val  ordinaryHours = regularHours()
        return (hoursWorked * ordinaryHours).toDouble()
    }

    fun reportHours(): String {
        val ordinaryHours = regularHours()
        return "Employee $name worked $ordinaryHours ordnary hours";
    }

    fun save() {
        print("Saving employee $name to database...")
    }

    fun regularHours(): Int {
        return if (hoursWorked > 40) 40 else hoursWorked
    }
}