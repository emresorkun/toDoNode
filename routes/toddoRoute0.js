const express= require("express");
const Todo=require("../model/todo")
const router= express.Router();

//8 FEb 2021 de yedek olarak kopyakadim




router.get("/", async (req, res)=>{
    //query string
    //console.log(req.query)

     const page = +req.query.page;
    // .sort({name:page}) find() dan sonra bu satiri kesip buraya aldik ki paginationa sadece konsantra olalim
try{

    const totalData = await Todo.find().count();

    const dataToShowPerReq = 2;

    const totalDataPart = totalData/dataToShowPerReq;
    const dataToShow = dataToShowPerReq * page
    
    const data= await Todo.find().limit(dataToShow)
        //const data= await Todo.find().limit(dataToShowPerReq)
    //console.log(data)
    //res.render("index.ejs", {data:data, error:"  "}) (buraya bir goz at)
    //res.render("index.ejs", {data:data, error:"empty"})
    res.render("index.ejs", 
     {
        data, 
        totalData,
        totalDataPart, 
        dataToShow, 
        dataToShowPerReq, 
        error:"empty"})
}

catch(err){
    res.render("error.ejs", {error: err})
    }



})

//path.join(__dirname, scss)



router.post("/", async (req, res)=>{

    console.log (req.body.name)
 
    try{
    await new Todo({
        name:req.body.name
    }).save();
    res.redirect("/")
    }
    catch(err){

        res.render("error.ejs", {error: err})
    }

})

router.get("/edit/:id", async (req, res)=>{
     console.log(req.query)
    const todo=await Todo.findOne({_id:req.params.id})
    console.log(todo)

    res.render("edit.ejs", {todo:todo})
    //console.log("editing content")

} )

router.post("/edit", async (req,res)=>{

    console.log(req.body)
    await Todo.updateOne( {_id:req.body.id}, {
        name:req.body.name
    })


    res.redirect("/")
})

router.get("/delete/:id", async (req, res)=>{

    await Todo.deleteOne({_id:req.params.id})
    res.redirect("/")

} )


module.exports=router;