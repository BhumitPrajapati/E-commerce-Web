const { log } = require('console');
const { sql, connection } = require('../../db/config');
const fs = require('fs');

const uploadImage = async (req, res) => {
    try {
        // if (!req.file) {
        //     return res.status(400).send('No file uploaded.');
        // }
        // const { buffer, originalname, mimetype  } = req.file;
        // console.log(req.file);
        
        let sqlRequest = new sql.Request(connection);
        const imageData = fs.readFileSync("asset/men.jpg");
        console.log(imageData);
        // console.log(image, imgName, imgType);

        sqlRequest.input('Image', sql.TYPES.VarBinary, imageData)
            // .input('ImageName', sql.TYPES.NVarChar, 'originalname')
            // .input('ImageType', sql.TYPES.NVarChar, 'mimetype')
        // console.log('------------------------------------------------------------------',buffer, '------------------------------------------');
        const query = `insert into product_img (image, Image_name, Image_Type) values('${imageData}', 'originalname', 'mimetype')`;
        // console.log(query);
        sqlRequest.query(query).then((data) => {
            console.log(data);
            res.status(200).send('File uploaded and saved to database');
        }).catch(err => {
            console.log('Error inserting data', err);
            return res.status(500).send('Error inserting data');
        });
    } catch (error) {
        console.log(error);
        res.status(400).send('Somehing Went wrong');
    }
};

module.exports = { uploadImage };