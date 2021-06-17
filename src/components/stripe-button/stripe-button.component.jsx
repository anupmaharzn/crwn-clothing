import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price *100; //for stripe price in cents
    const publishableKey = 'pk_test_51J3M59Ee3J0RBnttXZAsttTi72o3janRxxlLEHjHEu7ayl8VEPIItTKS15KDPqyvQJHK0uztAWIKKyE8Uv2DQXst00hqcQpbGf';
  const  onToken =token =>{
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='Anup Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}//on success callback
            stripeKey={publishableKey}

        />
    );

}
export default StripeCheckoutButton;