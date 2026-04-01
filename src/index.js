//require('dotenv').config({path: "./env"})
import dotenv from "dotenv";  // -r dotenv/config --experimental-json-modules in package.json
import connectDB from "./db/index.js";
import dns from "./db/dns.cjs";
import { app } from "./app.js";

dns




connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err)
})




















/* 
import express from "express";
const app = express();
( async () => {
    try {  //<2
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {  // <3 
            console.log("ERRR: ", error); // database is connected but express app is not listening (not able to talk to database)
            throw error
        })

        app.listen(process.env.PORT, () => {  // <4
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {  // <1
        console.error("ERROR:", error)
        throw err
    }
})()   //iife ;()()

*/