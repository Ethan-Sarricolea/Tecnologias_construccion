import { PaymentMethod } from "./PaymentMethod.js";

export class Paypal extends PaymentMethod {
    pay(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}