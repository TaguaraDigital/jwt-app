import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { loadStripe, } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import InvoicesFinder from "../../services/apis/InvoicesFinder"
import { AuthContext } from "../../hooks/contexts/AuthContext";
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"

const stripePromise = loadStripe("pk_test_51IH9hULbPZwPVRy0NM7zPUokRw3cGYLK3c15uSAkK21EIUxGCw7N9rCvDlFIpfgBun50VbzuB4Qr52Pe7UdJmMTs00mmWHZ3W0");

const CheckoutForm = ({invoicesToPay}) => {

    const history = useHistory();

    const stripe = useStripe();
    const element = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: element.getElement(CardElement)
        });

        if (!error) {
            try {
                const response = await InvoicesFinder.payments(paymentMethod, invoicesToPay);
                history.push("/invoice")
            } catch (err) { }
        } else {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="container-tarjeta">
            <div className="datos-tarjeta">
                <CardElement />
            </div>
            <button>Pagar Recibos</button>
        </form>                    
    )
}

const Payments = () => {
    const { invoices, setInvoices, currentUser } = useContext(AuthContext);

    const invoicesToPay = invoices.filter(invoice => invoice.invoice_status === 1)
    
    return (
        <>
        <Header page="home" />
         <div className="pago-container">
            <div className="tarjeta">
                <h1>{currentUser.email}</h1>
                <h2>Monto a Pagar { currentUser.payment_amout }</h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm invoicesToPay={invoicesToPay} />
                </Elements>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Payments