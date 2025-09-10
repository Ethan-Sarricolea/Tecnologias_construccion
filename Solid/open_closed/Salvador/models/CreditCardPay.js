import { PaymentMethod } from "./PaymentMethod.js";

export class CreditCardPay extends PaymentMethod {
    pay(amount) {
        console.log(`Processing credit card payment of $${amount}`);
    }
}