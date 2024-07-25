const {sql, connection} = require('../db/config');

const getUser = async (req, res) => {
    try {
        const request = new sql.Request(connection);
        request.query('select * from Program', (err, data) => {
            if (err) {
                console.log(err);
            }
            res.json(data.recordsets);
            // console.log(data.recordsets);
        });
    } catch (error) {
        console.log(error);
    }
        // const result = await sql.query`select * from Program`;
        // res.json(result.recordset);
    
}

module.exports = { getUser };