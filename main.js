const express= require('express');
const bodyparser= require('body-parser');
const mongoose= require('mongoose');
const Todo = require ("./model/todo")

 const app= express();

//app.use(express.json())
app.use(express.static(__dirname + "/public"))

app.use(bodyparser.urlencoded({extended:false}))


 
app.set("view engine", "ejs")







app.get("/", async (req, res)=>{

   await new Todo({
       name:"dummy task"
   })

    res.render("index.ejs")
})

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
