const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3500;

// MIDDLEWARE
app.use(express.json())
app.use(cors());

// ROUTES

// register & login routes
app.use("/auth", require("./routes/jwtAuth"));

// verify user dashboard (Homepage for authenticated user)
app.use("/dashboard", require("./routes/dashboard"));

// invoices
app.use("/invoices", require("./routes/invoices"));

// payment
app.use("/invoices", require("./routes/payments"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})