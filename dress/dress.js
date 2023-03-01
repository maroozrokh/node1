const mongoose = require('mongoose');

const dressSchema = mongoose.Schema({

    productName:{
      
        type: String,
        require: true,
        index: true



    },
    category:{
        type: String,
        require: true,
        index: true
    },
    price:{
        type: Number,
        require: true,

    },
    type:{
        type: String,
    


    },
    description:{
        type:String,
        require: true,

    },
    // image1:{
    //     data: Buffer,
    //     contentType: String
    // },








})
const Dress = mongoose.model("dress",dressSchema);
module.exports=Dress;