const express= require('express');
const bodyparser= require('body-parser');
const mongoose= require('mongoose');


 const app= express();


//app.use(express.json())

app.use(bodyparser.urlencoded({extended:false}))
//burayi sormak lazim
mongoose.connect("mongodb+srv://fed20s:Fed20s@cluster0.bpwjg.mongodb.net/emreTodo?retryWrites=true&w=majority", {
     
}, (err)=>{
if (err) return
app.listen(8000, ()=>{
        console.log("App is running")
})

})
