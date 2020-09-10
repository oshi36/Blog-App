const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;

mongoose.connect('mongodb+srv://blogAdmin:blogAdmin@blog.m09ku.mongodb.net/mern_blog?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open',()=>{
console.log('MongoDb connection established successfully!!')
});

const articlesRouter  = require('./routes/articles');
app.use('/articles',articlesRouter);

if(process.env.NODE_ENV==='production')
{
    app.use(express.static('test/build'));
}
app.listen(port,() => console.log(`The app is running on port : ${port}`));