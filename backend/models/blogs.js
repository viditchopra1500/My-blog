var mongoose=require('mongoose');

var Blog=mongoose.model('Blog',{
    title:{        
        type: String ,
        required:true,
        minlength:1,
        trim: true
    },
    content:{
        type: String ,
        required:true,
        minlength:1,
        trim: true
    },

});

module.exports={
    Blog
};