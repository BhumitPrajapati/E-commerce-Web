const { sql, connection } = require('../../db/config');

const getProduct = async (req, res) => {
    try {
        const request = new sql.Request(connection);
        request.query('select  * from product', (err, data) => {
            if (err) {
                console.log(err);
            }
            // console.log(data);
            res.json(data.recordset);
            // console.log(data.recordsets);
        });
    } catch (error) {
        console.log(error);
    }

}

module.exports = { getProduct };