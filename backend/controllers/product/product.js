const { sql, connection } = require('../../db/config');

const getProduct = async (req, res) => {
    try {
        const request = new sql.Request(connection);
        let query = 'select product_name, product_desc, product_price, Image from product AS P JOIN product_img AS IMG ON P.product_id = IMG.imageId';
        request.query(query, (err, data) => {
            if (err) {
                console.log(err);
            }
            // console.log(data.recordsets[0]);
            res.json(data.recordset);
            // console.log(data.recordsets);
        });
    } catch (error) {
        console.log(error);
    }

}

const getProductById = async (req, res) => {
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

const getCategories = async (req, res) => {
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

module.exports = { getProduct, getProductById, getCategories };