const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dajedrpdx',
    api_key: '366375164824834',
    api_secret: 'OwVdy4nl__PRgUZuLHX6oXDqjog'
});

module.exports = cloudinary;
