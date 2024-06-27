import {app} from "app.js";
import dbConnect from "./db";
import dotenv from "dotenv"

dotenv.config({
    path: "/.env"
})

dbConnect()
.then(()=>{
    app.on("error", ()=>{
        console.log(`Error: ${error}`);
 })

    app.listen(process.env.PORT || 4000, ()=>{
        console.log(`App is running on ${proces.env.PORT}`)
    })
})
.catch((error)=>{
    console.log( "Connection to MongoDB failed", error)
})