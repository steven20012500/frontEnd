const mongoose = require('mongoose');
const URI = 'mongodb+srv://jsuntaxic:nyAxUz78d0sHNLAp@Restaurante.kdgk98n.mongodb.net/SRI?retryWrites=true&w=majority&appName=Restaurante'
mongoose.connect(URI)
.then (db => console.log('DB conectada'))
.catch(err => console.error(err));
module.exports = mongoose;