const mongoose = require('mongoose');
const bycrypt  = require('bcryptjs'); // For password encryption

const UserSchema = mongoose.Schema({
    name : {
        type : String
    },
    email:{
        type : String,
        required : true
    },
    username:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }
});

const User = module.exports = mongoose.model('User',UserSchema,'users'); //'User' model, 'users' collection

module.exports.getUserById =  function(id,callback){
    User.findById(id,callback);
}

module.exports.getUserByUsername =  function(username,callback){
    const query = {username : username}; 
    User.findOne(query,callback);
}

module.exports.addUser = function(newUser,callback){
    
    // For password encryption
    bycrypt.genSalt(10, function(err, salt) {
        bycrypt.hash(newUser.password, salt, function(err, hash) {
            
            // Store hash in your password DB.
                if(err) throw arr;
                newUser.password = hash;
                newUser.save(callback);
        });
    });
    
}

module.exports.comparePassword = function(candidatePassword,hash,callback){
    bycrypt.compare(candidatePassword,hash,(err, isMatch) => {
        if(err) throw err;
        callback(null,isMatch);
    })
}