//REQUIRE MODULES.......
const express=require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path=require('path');
const routes = require('./routes/routes');
const Userdata=require('./models/userdata');


const app=express();
//HTTP SERVER...
const http = require("http").Server(app);
const port = process.env.PORT || 3000;

const publicPath=path.join(__dirname,'/public');
app.use(express.static(publicPath));

//BODY-PARSER......
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));






//MONGODB DATABASE CONNECTION...
var mongoDB= "mongodb://localhost:27017/copyPaste";
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true })
.then(() => console.log('Database Connected!'))
.catch(err => {
console.error(err);
});

/*var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log("Mongoose connected");
*/

//Routes
app.use('/', routes);

//LISTEN ON PORT SETTINGS.....
http.listen(port,function(){
	console.log("listening on "+3000);
});