import {useEffect, useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../../hooks/contexts/AuthContext";
import InvoicesFinder from "../../services/apis/InvoicesFinder"

const InvoicesAll = () => {

  const history = useHistory();
  const { currentUser, setCurrentUser, checkAuthenticated, invoicesAll, setInvoicesAll } = useContext(AuthContext);
   
    const cal_balance = (invoices) => {
    
      console.log(invoices, ">===<", currentUser)

      const rec = [];

      invoices.map((invoice, i) => {

        if (i === 0) {
          rec.push({ ...invoice, balance: invoice.invoice_amount + currentUser.user_initial_balance })
        } else {
          rec.push({ ...invoice, balance: invoice.invoice_amount + rec[i-1].balance })
        }
      })
     return rec;
    }

    useEffect(() => {
      checkAuthenticated()
    },[])

    useEffect(() => {
      const fetchData = async () => {
        try {

          const response = await InvoicesFinder.all(currentUser.user_id);
          
          setInvoicesAll(cal_balance(response.data.invoices));
        } catch (err) { console.log(err)}
      };
  
      fetchData();
  
    }, [])

    return (
      <div className="list-group">
      <table className="smart-table">
        <caption>Estado Cuenta </caption>
        <thead>
          <tr>
            <th> Recibo </th>
            <th> Monto </th>
            <th> Pagado </th>
            <th> Fecha Pago </th>
            <th> Referencia </th>
            <th> Saldo </th>
          </tr>
        </thead>
        <tbody>
          { invoicesAll && 
            (invoicesAll.length > 0 ) && invoicesAll.map((invoice) => {
              return (
                <tr
                  // onClick={() => handleInvoicetSelect(invoice.invoice_id)}
                  key={invoice.invoice_id}
                >
                  <td data-col-title="Recibo">  {invoice.invoice_id} </td>
                  <td data-col-title="Monto"> {invoice.invoice_amount } </td>
                  { (invoice.invoice_status === 1) ? <td data-col-title="Pagado"> {invoice.invoice_amount } </td> : <td data-col-title="Pagado"> 0 </td> }
                  { (invoice.invoice_status === 1) ? <td data-col-title="Fecha Pago"> {invoice.payment_date} </td> : <td data-col-title="Fecha Pago">  -  </td> }
                  { (invoice.invoice_status === 1) ? <td data-col-title="Referencia"> {invoice.payment_reference} </td> : <td data-col-title="Referencia">  -  </td> }
                  <td data-col-title="Saldo"> {invoice.balance}  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default InvoicesAll;