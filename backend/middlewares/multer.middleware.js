const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create the uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
    console.log('Creating uploads directory...');
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Multer upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


// Function to delete all files in the uploads directory
const deleteFiles = () => {
    fs.readdir(uploadsDir, (err, files) => {
        if (err) {
            console.log(`Error reading files: ${err}`);
            return;
        }
        for (const file of files) {
            const filePath = path.join(uploadsDir, file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(`Error deleting file: ${filePath}, ${err}`);
                } else {
                    console.log(`Deleted file: ${filePath}`);
                }
            });
        }
    });
};

// Schedule the file deletion every 24 hours
setInterval(deleteFiles, 864000);


module.exports = upload;
