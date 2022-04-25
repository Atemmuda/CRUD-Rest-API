// Modules Used 
const { timeStamp } = require('console')
const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions')

// Connection to a mongo Db 
// to return url and some objects of defualt values
const connectDb = (url) =>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        //useCreatIndex: true,
       // useFIndAndModify: false,
        useUnifiedTopology: false
    })
}

//Making it available for some othe files to use
module.exports = connectDb;