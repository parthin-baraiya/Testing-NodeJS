import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv"
import testRoute from "../backend/routes/test.js"

const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


///config
if(process.env.NODE_ENV!=="PRODUCTION"){
    dotenv.config({ path: "backend/config/config.env"});
}

///routes
app.use("/api/v1/",testRoute)

//server
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})