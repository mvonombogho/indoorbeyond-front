import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { buffer } from "micro";

const stripe = require('stripe'(process.env.STRIPE_SK))
const endpointSecret = "whsec_fefb07a028dd5cd25f12c7b6c76a99a8ac958e325c0b7777b721c59ddbb53472";

export default async function handler(req,res){
  await mongooseConnect()

  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch(event.type){
    case 'checkout.session.completed':
      const data = data.object
      const orderId = data.metadata.orderId
      const paid = data.payment_status === 'paid'
      if(orderId && paid){
        await Order.findByIdAndUpdate(orderId,{
          paid:true,
        })
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`)
  }
  res.status(200).send('ok')
}

export const config = {
  api:{bodyParser:false,}
}

//liked-free-heroic-pardon