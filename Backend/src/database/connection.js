const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/garden'

 mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('db is connected'))
    .catch(err => console.error(err));



