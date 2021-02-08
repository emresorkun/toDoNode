const express= require('express');
const bodyparser= require('body-parser');
const mongoose= require('mongoose');
const router= require("./routes/todoRoute");

require("dotenv").config();

const app= express();

app.use(express.static(__dirname + "/public"))
app.use(bodyparser.urlencoded({extended:false}))


 
app.set("view engine", "ejs")

app.use("/", router)

mongoose.connect(process.env.DATABASE_URL, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err)=>{
if (err) return
app.listen(process.env.PORT, ()=>{
        console.log("App is running")
})

})
