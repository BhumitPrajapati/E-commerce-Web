const { sql, connection } = require('../../db/config');
const { message } = require('../../middlewares/msgHandler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'Admin!123'; // Use environment variable for the secret key

const login = async (req, res) => {
    const sqlRequest = new sql.Request(connection);
    const { username, password } = req.body;

    // const hashedPassword1 = await bcrypt.hash(password, 10);
    // console.log(hashedPassword1);
    // const hashedPasswordFromDB = `${password}`; // Example hashed password from DB
    // const plainPassword = 'Admin!2024';

    // // Test comparison
    // bcrypt.compare(plainPassword, hashedPasswordFromDB, (err, result) => {
    //     if (err) throw err;
    //     console.log('Match:', result); // Should be true if passwords match
    // });



    try {
        const query = `SELECT UserName, Password, IsAdmin, FirstName, LastName FROM tblUser WHERE UserName = '${username}'`;
        // console.log(query);

        sqlRequest.input('username', sql.VarChar, username);

        sqlRequest.query(query, async (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).json(message(500, 'Internal Server Error', null, '', '/api/login'));
            }

            const user = data.recordset[0];
            console.log(user);

            if (!user) {
                return res.status(400).json(message(400, 'Invalid username or password', null, null, '/api/login'));
            }

            // Compare hashed password
            const match = await bcrypt.compare(password, user.Password);
            // console.log("userPsw: ", user.Password, typeof (user.Password));
            // console.log("psw: ", password, typeof (password));


            if (!match) {
                return res.status(400).json(message(400, 'Invalid password', null, null, '/api/login'));
            }

            if (user.IsAdmin) {
                // Generate a token
                const token = jwt.sign(
                    { username: user.UserName, isAdmin: user.IsAdmin },
                    SECRET_KEY,
                    { expiresIn: '1h' } // Token expiry time
                );

                let finalData = message(200, 'Login successful', { token, user }, null, '/api/login');
                res.status(200).json(finalData);
            } else {
                res.status(403).json(message(403, 'Unauthorized', null, null, '/api/login'));
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(message(500, 'Something went wrong', null, '', '/api/login'));
    }
};

module.exports = { login };