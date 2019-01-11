const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const config        = require('./config/database');
const passport      = require('passport');
const cors          = require('cors');


const PORT          = 3000;

//OLD CODE

/*
mongoose.connect(config.database,
    {
        useNewUrlParser: true 
    }, 
    err=>{
        if(err){
            console.error('Error ::'+err);
        }else{
            console.log('Connect to mongoDB');
        }
})
*/

//NEW CODE

//Database connection

mongoose.connect(config.database,{
    useNewUrlParser: true 
});

// On connect
mongoose.connection.on('connected',()=>{
    console.log('Connected to database');
})

// On Error
mongoose.connection.on('error',(err)=>{
    console.log('Database error '+err);
})

// Connection End

const app           = express();

app.use(bodyParser.json());

// cors
app.use(cors());

const api           = require('./routes/api'); // for routes
app.use('/api',api);

// Passport Middlewire

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport').passport;

app.get('/',function(req,res){
    res.send('Hello from server');
})

app.listen(PORT,function(){
    console.log('Server running on port number '+PORT);
})