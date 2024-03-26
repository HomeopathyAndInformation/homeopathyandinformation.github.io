// This is your test publishable API key.
document.addEventListener('DOMContentLoaded', async () => {

    const stripe = Stripe("pk_test_51LcEBbJAAlZj4CQY1NHHhCpXNcboVvjPacygWxMaaiTjVhWYmpsNiNinhqhYWNMX3bxYvXIPw4C6B1OWsJTmdROm00iBQOKtdL");

    let elements;

    initialize();

    let emailAddresses = '';
    
    //Fetches a PaymentIntent and captures the client secret
    async function initialize() {

        const { clientSecret } = await fetch("../payment/create.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                paymentMethodType: 'card',
                currency: 'can',
            }),
        }).then((r) => r.json());

        elements = stripe.elements();

        const paymentElementOptions = {
            layout: "tabs",
        };

        //const paymentElement = elements.create("payment", paymentElementOptions);
        const paymentElement = elements.create("card");
        paymentElement.mount("#card-element");
    }
});

/*
document.addEventListener('DOMContentLoaded', async () => {
    const stripe = Stripe('pk_test_51LcEBbJAAlZj4CQY1NHHhCpXNcboVvjPacygWxMaaiTjVhWYmpsNiNinhqhYWNMX3bxYvXIPw4C6B1OWsJTmdROm00iBQOKtdL');

    let elements = stripe.elements();
    let cardElement = elements.create('card');
    cardElement.mount('#card-element');

    const form = document.querySelector('#payment-form');
    form.addEventListener('submit', async (e) => {
        addMessage('Submitted form to the Backend!');
        e.preventDefault();

        //Create PaymentIntent on the server
        const {error: backendError, clientSecrets} = await fetch('/create-payment-intent',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                paymentMethodType: 'card',
                currency: 'can',
            }),
        })
        .then((response) => response.json());

        addMessage('Payment created!');

        const nameInput = document.querySelector('#name');
        const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
            clientSecrets, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: nameInput.value,

                    }
                }
            }
        )

        addMessage('PaymentIntent (${paymentIntent.id}): ${paymentIntent.status}');

        if(stripeError){

        }
    });

    const addMessage = (message) => {
        const messagesDiv = document.querySelector('#messages');
        messagesDiv.style.display = 'block';
        messagesDiv.innerHTML += '>' + message + '<br>';
        console.log('StripeSampleDebug: ', message);
    }
});
*/