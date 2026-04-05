
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; 

const app = express();   // creating an express app
 
//middleware
app.use(cors({ //cors is used to allow cross-origin requests from frontend to backend
    origin: process.env.CORS_ORIGIN,  // frontend url
    credentials: true,
})) 

//configuration of express 
app.use(express.json({limit: '16kb'})) // accept json data into express
app.use(express.urlencoded({extended: true, limit: '16kb'})) 
app.use(express.static("public"))
app.use(cookieParser()) // from my server, i can access the cookies from user browser or set cookies in user browser



// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter) // if any request comes to /users, it will be handled by userRouter
// http://localhost:5000/api/v1/users/register like this


export { app }