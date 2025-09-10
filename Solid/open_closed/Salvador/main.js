import { CreditCardPay } from "./models/CreditCardPay.js";
import { Paypal } from "./models/Paypal.js";
import { Bitcoin } from "./models/Bitcoin.js";
import { PaymentServices } from "./services/PaymentServices.js";

const paymentService = new PaymentServices();
const creditCardPayment = new CreditCardPay();
const paypalPayment = new Paypal();
const bitcoinPayment = new Bitcoin();

paymentService.serviceProcess(creditCardPayment, 100);
paymentService.serviceProcess(paypalPayment, 80);
paymentService.serviceProcess(bitcoinPayment, 200);