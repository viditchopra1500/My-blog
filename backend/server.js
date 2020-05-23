var express=require('express');
var bodyParser=require('body-parser')

var {mongoose}=require('./db/mongoose');
var {Blog}=require('./models/blogs');
mongoose.set('useFindAndModify', false);
const cors = require('cors');


var app=express();                            
var port =process.env.PORT ||4000;  
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

//middleware(always run for all routes when server is running)
app.use(bodyParser.json());                   


//use when user posts a blog
app.post('/blogs',(req,res)=>{  
    //to create a new document(new entry) in Blog collection             
    var blog=new Blog({
        content:req.body.content,
        title:req.body.title             
    });
    blog.save().then(()=>{
        res.status(200).send();
    }).catch((e)=>{
        res.status(400).send(e);
    })
});

//use when user wants all available todos
app.get('/blogs',(req,res)=>{
                 
    Blog.find({
    }).then((blogs)=>{
        res.send({blogs});
    }).catch((e)=>{
        res.status(400).send(e);
    })
})
app.get('/blogs/:id',(req,res)=>{
       
    Blog.findOne({
        _id:req.params.id
    }).then((blog)=>{
        if(!blog)
        return res.status(404).send('id not found');
        res.status(200).send({blog});
    }).catch((e)=>{
        res.status(400).send(e);
    })
})

app.listen(port,()=>{
    console.log(`started on port ${port}`);
})

module.exports={
    app
}