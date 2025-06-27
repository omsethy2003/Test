import React from 'react'
import { Alert, AlertTitle } from '@mui/material'

const StripePayment = () => {
  return (
        <div className='h-96 flex justify-center items-center'>
            <Alert severity="warning" variant='filled' style={{ maxWidth: "400px" }}>
                <AlertTitle>Stripe Unavailable</AlertTitle>
                Paypal payment is unavailable. Please use another payment method.
                </Alert>
        </div>
    )
}

export default StripePayment