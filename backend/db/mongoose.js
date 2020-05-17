var mongoose=require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/BlogApp');

module.exports={
    mongoose
}