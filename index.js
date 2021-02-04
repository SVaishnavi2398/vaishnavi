var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');

mongoose.connect('mongodb://localhost:27017/nodangular', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  title: String,
  description: String,
  
  DateTimeStamp : { type: Date, default: (new Date()).getTime() }  
});

const dataModel = mongoose.model('users', dataSchema);
const app = express();
app.use(bodyParser.json())
app.use(cors());


app.get("/get_data" , (req,res)=>{
  dataModel.find({},function(err,docs){
    if(!err){
        res.send(docs);
    }
})
});


app.post("/post_data" , (req,res)=>{
  
});




app.listen(4000);