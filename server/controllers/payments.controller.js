const dbConnection = require('../database/connections');
const Stripe = require('stripe');

const controllerPagos = {};


// PAYMENTS
controllerPagos.stripe = async (req, res) => {
  const stripe = new Stripe("sk_test_51IH9hULbPZwPVRy01f0RkPdvV4TRRVCnEAeEh5SuUOE3vz4HrVmURWswqZYiEp79tQHbQE7QPGxevFhk7qssPcxC00PVvzQy41")
  const { paymentMethod, invoices } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
    
      amount: 25000,
      currency: "USD",
      description: "Cobro de recibos",
      payment_method: paymentMethod.id,
      confirm: true, //confirm the payment at the same time
    });
    
    let amount_collected = 0;

    const sql = "UPDATE invoices SET invoice_status = ?, payment_date = ?, payment_reference = ? WHERE invoice_id = ?";
    invoices.map(async (invoice) => {
    
    
      dbConnection.query(sql, [1, "2021-02-11", payment.id, invoice.invoice_id], (err, result) => {
      if (err) {
        res.status(400).json({
          status: 400,
          success: false,
          message: err.sqlMessage
        })
        return;
      }
      amount_collected =+ 1;
    })
      
      //     res.status(200).json({
      //         status: 200,
      //         success: true,
      //         userId : result.isertId,
      //         email,
      //         password,
      //         message: "ok"
      //     })

    })
    
    return res.status(200).json({
      amount_collected,
      message: "Successful Payment"
    });
  } catch (error) {
    console.log('hay un error', error);
      return res.json({ message: error.raw.message });
  }
}

module.exports = controllerPagos;