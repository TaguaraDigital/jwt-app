const bcrypt = require("bcrypt");
const dbConnection = require("../database/connections");
const jwtGenerator = require("../utils/jwtGenerator");
const controllerAuth = {};


// signup a new user (create user)
controllerAuth.register = async (req, res) => {
    const { user_name, email, password } = req.body;

    try {
        dbConnection.query("SELECT * FROM users WHERE user_email = ? OR user_name = ? LIMIT 1", [email, user_name], async (err, result) => {

            if (result.length) {
                return res.status(401).json({
                    status: 401,
                    success: false,
                    msg: 'Error => User already exist'
                })
            }
            const salt = await bcrypt.genSalt(10);
            const bcryptPassword = await bcrypt.hash(password, salt);

            dbConnection.query("INSERT INTO users (user_name, user_email, user_password) VALUES ( ?, ?, ?)", [user_name, email, bcryptPassword], (err, result) => {
                if (err) {
                    return res.status(400).json({
                      status: 400,
                      success: false,
                      message: "Error =" + err.sqlMessage
                    })
                }
                
                const token = jwtGenerator(email)
            
                  res.status(200).json({
                    status: 200,
                    success: true,
                    count: 1,
                    data: {
                        user_id: result.insertId,
                        user_name,
                        user_email: email,
                        user_initial_balance: 0
                    },
                    token,
                    message: "ok"
                  })
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

// login
controllerAuth.login = async (req, res) => {
    const { email, password } = req.body;
        
    try {
        dbConnection.query("SELECT * FROM users WHERE user_email = ?", [email], async (err, result) => {
            
            if (result.length === 0) {
                return res.status(400).json({
                    status: 400,
                    success: false,
                    msg: 'User Not exist'
                })
            }
            const validPassword = await bcrypt.compare(password,result[0].user_password);
            
            if (!validPassword) {
                res.status(403).json({
                    status: 403,
                    success: false,
                    msg: 'Wrong Credential'
                })
                return
            }

            const token = jwtGenerator(result[0].user_email)
            
            res.status(200).json({
                status: 200,
                success: true,
                count: 1,
                data: {
                    user_id: result[0].user_id,
                    user_name: result[0].user_name,
                    user_email: email,
                    user_initial_balance: 0
                },
                token,
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


// verify if user is veriefied
controllerAuth.verify = async (req, res) => {
    const email = req.user;
    try {
        res.status(200).json({
            status: 200,
            success: true,
            token: req.token,
            user_email: req.user,
            message: "ok"
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Token is not valid"
        })
    }
}

module.exports = controllerAuth;