const { sql, connection } = require('../../db/config');
const { message } = require('../../middlewares/msgHandler');

const login = async (req, res) => {
    const sqlRequest = new sql.Request(connection);
    const { username, password } = req.body;
    try {
        const query = `select UserName, Password, IsAdmin, FirstName, LastName from tblUser where IsAdmin = 1 and UserName ='${username}' and Password = '${password}'`;

        sqlRequest.query(query, (err, data) => {
            let apiData = data.recordset;
            if (data.rowsAffected == 0) {
                let finalData = message(400, 'Data Not Found', null, null, '/api/login');
                res.status(400).json(finalData);
            } else {
                let finalData = message(200, 'Successfully fetching the data', apiData, null, '/api/login');
                res.status(200).json(finalData);
            }
        });
    } catch (error) {
        console.log(error);
        let finalData = message(500, 'Something was wrong', null, '', '/api/login');
        res.status(500).json(finalData);
    }
};

module.exports = { login };
