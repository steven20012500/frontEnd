const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/sri'
mongoose.connect(URI)
.then (db => console.log('DB conectada'))
.catch(err => console.error(err));
module.exports = mongoose;