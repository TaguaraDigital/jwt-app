const InvoicesFinder = {};
const URL = "http://localhost:3500/invoices/"

InvoicesFinder.pending = async (user) => {
    //  const response = await fetch(URL + "pending", {
     const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", token: localStorage.token },
        body: JSON.stringify({"user_id": user})
    })
    return await response.json()
}

InvoicesFinder.payments = async (paymentMethod, invoices) => {

    // const response = await fetch(URL, {
     const response = await fetch(URL + "payment", {
        method: "PUT",
        headers: { "Content-Type": "application/json", token: localStorage.token },
        body: JSON.stringify({paymentMethod, invoices})
    })
    return await response.json()
}

InvoicesFinder.allById = async (user) => {
    const response = await fetch(URL + "pending", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({...user})
    })
    return await response.json()
}

InvoicesFinder.all = async (user) => {
    const response = await fetch(URL + "all", {
        method: "POST",
        headers: { "Content-Type": "application/json", token: localStorage.token },
        body: JSON.stringify({"user_id": user})
    })
    return await response.json()
}

export default InvoicesFinder;