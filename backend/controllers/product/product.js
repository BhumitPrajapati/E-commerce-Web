const { sql, connection } = require('../../db/config');
const { message } = require('../../middlewares/msgHandler');

const getProduct = async (req, res) => {
    try {
        const sqlRequest = new sql.Request(connection);
        let categoryId = req.query.categoryId;

        let query = 'select product_name, product_price, product_image, product_desc from product;';
        switch (parseInt(categoryId, 10)) {
            case 1:
                query = `select product_name, product_price, product_image, product_desc
                from product
                where product_category_id = 1`;
                break;
            case 2:
                query = `select product_name, product_price, product_image, product_desc
                from product
                where product_category_id = 2`;
                break;
            default:
                query;
                break;
        }

        sqlRequest.query(query, (err, data) => {
            let apiData = data.recordsets;
            if (apiData.length !== 0) {
                let jsonData = message(200, 'Successfully fetching the data', apiData, null, '/api/getProduct');
                res.status(200).json(jsonData);
            } else {
                let jsonData = message(400, 'Data Not Found', null, null, '/api/getProduct');
                res.status(400).json(jsonData)
            }
        })
    }
    catch (error) {
        console.log(error);
        let jsonData = message(500, 'Something was wrong', null, '', '/api/getProduct');
        res.status(500).json(jsonData)
    }
}

module.exports = { getProduct };