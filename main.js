const express= require('express');
const bodyparser= require('body-parser');
const mongoose= require('mongoose');


 const app= express();


//app.use(express.json())

app.use(bodyparser.urlencoded({extended:false}))
//burayi sormak lazim
mongoose.connect("mongodb+srv://emresorkun:EmreSorkun12!@cluster0.btpe6.mongodb.net/toDoEmre?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err)=>{
if (err) return
app.listen(8000, ()=>{
        console.log("App is running")
})

})
