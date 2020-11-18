const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require("method-override");

//Initializations
const app = express();
require('./database/connection');


//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, '..', '..', 'Frontend'))
app.engine('.hbs', exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Midleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//Routes
app.use(require('./routes/index_routes'));
app.use(require('./routes/enciclopedia_routes'));

//Static files
app.use(express.static(path.join(__dirname,  '..', '..', 'Frontend', 'public')));

//server listening 
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
})