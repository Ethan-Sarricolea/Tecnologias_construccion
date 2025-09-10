export class PaymentServices {
    serviceProcess(paymentMethod, amount) {
        paymentMethod.pay(amount);
    }
}