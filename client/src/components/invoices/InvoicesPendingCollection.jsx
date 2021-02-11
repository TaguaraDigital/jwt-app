import {useEffect, useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../../hooks/contexts/AuthContext";
import InvoicesFinder from "../../services/apis/InvoicesFinder"

const InvoicesPendingCollection = () => {

  const history = useHistory();
  const { currentUser, setCurrentUser, checkAuthenticated, invoices, setInvoices} = useContext(AuthContext);
  // const [invoices, setInvoices] = useState({});
  const [amountToPay, setAmountToPay] = useState(0);
    
  const handleCheckBox = (e, id) => {
    setAmountToPay(0);
    invoices.map((invoice) => {
      if(id === invoice.invoice_id) {
        invoice.invoice_status = e.target.checked ? 1 : 0;
      }

      if (invoice.invoice_status === 1 ) {
        setAmountToPay((amount) => {
        return amount + invoice.invoice_amount});
      }
    })
  }

  const handlePagar = (e) => {
    e.preventDefault()
    setCurrentUser( (user) => {
      return {...user, payment_amout: amountToPay}})
    history.push("/payment")
  }


  useEffect(() => {
      checkAuthenticated()
    },[])

    useEffect(() => {
      const fetchData = async () => {
        try {

          const response = await InvoicesFinder.pending(currentUser.user_id);
          
          setInvoices(response.data.invoices);
        } catch (err) { console.log(err)}
      };
  
      fetchData();
  
    }, [])


    return (
      <div className="list-group">
      <table className="smart-table">
        <caption>Recibos Pendientes</caption>
        <thead>
          <tr>
            <th> Recibo </th>
            <th> Monto </th>
            <th> pagar </th>
          </tr>
        </thead>
        <tbody>
          { invoices && 
            (invoices.length > 0 ) && invoices.map((invoice) => {
              return (
                <tr
                  // onClick={() => handleInvoicetSelect(invoice.invoice_id)}
                  key={invoice.invoice_id}
                >
                  <td data-col-title="Recibo">  {invoice.invoice_id} </td>
                  <td data-col-title="Monto"> {invoice.invoice_amount } </td>
                  <td data-col-title="Pagar"> 
                    <input
                      type="checkbox"
                      name={"check"+invoice.invoice_id}
                      id={"check"+invoice.invoice_id}
                      onChange={(e) => handleCheckBox(e, invoice.invoice_id)}
                    />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      {(amountToPay > 0) 
        ? (<div
            style={
              {
                "backgroundColor": "#f3f6fa",
                "width": "50%",
                "margin": "2rem 25%",
                "border": "1px solid #5ca0c3",
                "display": "flex",
                "justifyContent": "space-around",
                "alignItems": "center"
            }}
          >
            <h1> Total a pagar : <span>{amountToPay}</span></h1>
            <button onClick={handlePagar} > PAGAR</button>
          </div>
        )
        : ''
      }

    </div>
  );
}

export default InvoicesPendingCollection;