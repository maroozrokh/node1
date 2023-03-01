const mongoose = require('mongoose');
mongoose.connect('mongodb://mongodev:27017/dress-shop',{
    // useNewUrlParser:true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
    // do not need up information in mongoo db 6 to up version


}).then(()=>{
    console.log('connection successful!');

}).catch((e)=>{
    console.log('Connection failed!',e);

})