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

    const data= await Todo.find()

    res.render("index.ejs", {data:data})
})



app.post("/", async (req, res)=>{

    console.log (req.body.name)

    await new Todo({
        name:req.body.name
    }).save();

    res.redirect("/")

})

app.get("/delete/:id", async (req, res)=>{


    await Todo.deleteOne({_id:req.params.id})
    res.redirect("/")
    console.log("deleting content")

} )

app.get("/edit/:id", async (req, res)=>{


    const todo=await Todo.findOne({_id:req.params.id})

    console.log(todo)

    res.render("edit.ejs", {todo:todo})
    //console.log("editing content")

} )

app.post("/edit", (req,res)=>{

    console.log(req.body)
    res.send("works")
})




mongoose.connect("mongodb+srv://emresorkun:EmreSorkun12!@cluster0.btpe6.mongodb.net/toDoEmre2?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err)=>{
if (err) return
app.listen(8000, ()=>{
        console.log("App is running")
})

})
