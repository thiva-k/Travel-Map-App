const express = require("express")
const mongoose =require("mongoose")
require('dotenv').config({path:'../.env'});
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
const app= express();
app.use(express.json())

 mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("MongoDB Connected"));


//  const router = express.Router()
//  router.get("/", async(req,res)=>{
//     res.status(200).json("")
//  })
// app.use("/",router)
app.use("/api/pins", pinRoute)
app.use("/api/users",userRoute)
app.listen(8805,()=>{
    console.log("Backend is running")
})




console.log(process.env.MONGODB_URI)

