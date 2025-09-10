import { PaymentMethod } from "./PaymentMethod.js";

export class Bitcoin extends PaymentMethod {
    pay(amount) {
        console.log(`Processing Bitcoin payment of $${amount}`);
    }
}