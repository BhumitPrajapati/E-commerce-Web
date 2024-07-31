const cloudinary = require('../../utils/cloudinary.utils');
const { sql, connection } = require('../../db/config');

exports.uploadImage = async (req, res) => {
    try {
        // Upload image to Cloudinary
        console.log(req.file.path);
        const result = await cloudinary.uploader.upload(req.file.path);
        url = result.secure_url;
        console.log(url);
        // Store URL in SQL Server
        const sqlRequest = await new sql.Request(connection);

        const sqlQuery = `insert into product_img (image, Image_name, Image_Type) values('${url}', 'originalname', 'mimetype')`;
        // console.log(sqlQuery);
        await sqlRequest.input('url', sql.NVarChar(sql.MAX), result.secure_url)
            .query(sqlQuery).then((data) => {   
                // console.log(data);
                res.status(200).json({
                    message: 'Image uploaded successfully',
                    url: result.secure_url
                })
            }).catch(err => {   
                console.log(err);
            });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getImages = async (req, res) => {
    try {
        const sqlRequest = await new sql.Request(connection);

        const sqlQuery = `SELECT * FROM product_img;`;
        sqlRequest.query(sqlQuery).then((data) => {
            // console.log(data);
            res.status(200).json(data.recordset);
        }).catch(err => {
            res.status(500).json({ error: err.message });
        });

        // res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
