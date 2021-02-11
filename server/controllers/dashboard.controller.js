const bcrypt = require("bcrypt");
const dbConnection = require("../database/connections");
const jwtGenerator = require("../utils/jwtGenerator");
const controllerDashboard = {};


// Home
controllerDashboard.home = async (req, res) => {
        try {

        dbConnection.query("SELECT * FROM users WHERE user_email = ?", [req.user], async (err, result) => {
            res.status(200).json({
                status: 200,
                success: true,
                count: 1,
                data: {
                    user_id: result[0].user_id,
                    user_name: result[0].user_name,
                    user_email: result[0].user_email,
                    user_initial_balance: result[0].user_initial_balance,
                },
                token: req.token,
                message: "ok"
            })
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Server Error"
        })
    }
}

module.exports = controllerDashboard;