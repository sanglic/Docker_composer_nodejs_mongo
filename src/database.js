const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/PruebaNode', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));