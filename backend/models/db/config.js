const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Mangemnet', {
    useNewUrlParser: true
}).then(() => {
    console.log('Database Connected')
}).catch((err) => {
    console.log('Not able to connect with database',err)
})