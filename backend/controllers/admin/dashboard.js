const cloudinary = require('../../utils/cloudinary.utils');
const { sql, connection } = require('../../db/config');
const { message, isNullUndefinedOrBlank } = require('../../middlewares/msgHandler')

const addProduct = async (req, res) => {
    try {
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        url = result.secure_url;
        const { originalname, mimetype } = req.file;
        // console.log(url);

        const { name, price, qty, description, categoryId } = req.body;


        if (!isNullUndefinedOrBlank(url) && !isNullUndefinedOrBlank(name) && !isNullUndefinedOrBlank(price) && !isNullUndefinedOrBlank(qty) && !isNullUndefinedOrBlank(description) && !isNullUndefinedOrBlank(categoryId)) {
            // Store URL in SQL Server
            const sqlRequest = await new sql.Request(connection);

            const sqlQuery = `insert into product (product_name, product_price, product_image, product_qty, product_desc, product_category_id) values ('${name}', '${price}', '${url}', ${qty}, '${description}', ${categoryId})`;
            // console.log(sqlQuery);
            await sqlRequest
                .input('url', sql.NVarChar(sql.MAX), url)
                .input('originalname', sql.NVarChar(sql.MAX), originalname)
                .input('mimetype', sql.NVarChar(sql.MAX), mimetype)
                .input('name', sql.VarChar(50), name)
                .input('price', sql.VarChar(50), price)
                .input('qty', sql.TinyInt, qty)
                .input('description', sql.VarChar(100), description)
                .input('categoryId', sql.TinyInt, categoryId)
                .query(sqlQuery).then((data) => {
                    console.log(data);
                    if (data.rowsAffected >= 0) {
                        let apiData = message(200, 'Image uploaded successfully', url, null, 'api/admin/addProduct');
                        res.status(200).json(apiData);
                    } else {
                        let apiData = message(500, 'Something was wrong', null, null, 'api/admin/addProduct');
                        res.status(500).json(apiData);
                    }
                }).catch(err => {
                    console.log(err);
                    let apiData = message(500, 'Something was wrong', null, '', 'api/admin/addProduct');
                    res.status(500).json(apiData);
                });
        } else {
            let apiData = message(500, 'Fail to upload File .', null, null, 'api/admin/addProduct');
            res.status(400).json(apiData);
        }
    } catch (err) {
        console.log(err);
        let apiData = message(500, 'Something was wrong', null, '', 'api/admin/addProduct');
        res.status(500).json(apiData);
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id, name, price, qty, description, img } = req.body;
        const sqlRequest = await new sql.Request(connection);
        const sqlQuery = `update product set product_name = '${name}', product_price = '${price}', product_image = '${img}', product_qty = '${qty}', product_desc = '${description}', modifiedat = GETDATE() where product_id = ${id};`;
        await sqlRequest.query(sqlQuery).then((data) => {
            console.log(data);
            if (data.rowsAffected >= 0) {
                let apiData = message(200, 'Product updated successfully', null, null, 'api/admin/updateProduct');
                res.status(200).json(apiData);
            } else {
                let apiData = message(500, 'Something was wrong', null, null, 'api/admin/updateProduct');
                res.status(500).json(apiData);
            }
        }).catch(err => {
            console.log(err);
            let apiData = message(500, 'Something was wrong', null, '', 'api/admin/updateProduct');
            res.status(500).json(apiData);
        });
    }
    catch (err) {
        let apiData = message(500, 'Something was wrong', null, '', 'api/admin/updateProduct');
        res.status(500).json(apiData);
    }
}

module.exports = { addProduct, updateProduct };