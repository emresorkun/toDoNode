const express= require('express');
const bodyparser= require('body-parser');
const mongoose= require('mongoose');
const router= require("./routes/todoRoute");
//const nodeSass= require('node-sass-middleware');
require("dotenv").config();

 const app= express();

// app.use(nodeSass(
//         //42:20, 21 Ocak 10:00 vidde acikliltyor
//         //src
//         { src: path.join(__dirname, "scss"), 
//           dest: path.join(__dirname, "public")
//         }
//         //dest

// ))

app.use(express.static(__dirname + "/public"))
app.use(bodyparser.urlencoded({extended:false}))


 
app.set("view engine", "ejs")

app.use("/", router)

//BURAYA KADAR

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
