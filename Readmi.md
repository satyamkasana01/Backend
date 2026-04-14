# backend learning through project

- [Modle link] (https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

# Backend setup
npm init -- for backend package.json and install .git

create floder
# public/temp

# .gitignore 
keep for sensitive file. those file did not push on github
by the 'gitignore generator' site we got by default setup for ignore

# .env
 plaintext configuration file used to define environment-specific variables, such as API keys, database credentials, or secrets, outside the application code. It follows a KEY=VALUE format, ensuring sensitive data is not hardcoded, and is typically ignored by Git to prevent security risks

 # create 'src' folder 
 then create our file by gitbash - touch app.js constant.js index.js

# now work on package.json
1. change "type": "module"  from "commonjs"

2. install nodemon (Nodemon is a command-line tool that helps with the speedy development of Node. js applications. It monitors your project directory and automatically restarts your node application when it detects any changes.)

--  npm i -D nodemon

3. in "script": {
    change "test" to "dev": "nodemon src/index.js"
}

# install $ npm i -D prettier
create file .prettierrc  and another file .prettierignore

-- now i made my MongoDB atles account and create my server 


-now install npm package of (npm i mongoose express dotenv)

# How to connect database
--1. all the database connection is written in one file (index.js) through ()() iffe or made function and call it

-- another apporch and clean 
in db folder made index.js

-- import express in # app.js

when we used async there is required of promises 
--so we used .then.catch in index.js

now install 2 package - npm cookie-parser cors and import them in app.js

#utils (video 9 need rewatch)


# Modles 
write normal modeling in files
after this install mongoose-aggregate-paginate-v2, bcrypt and jsonwebtoken and import wisely 
now the problem is we increapt this so we get help form middlewre(pre hock)
create custom tokken

# file uplode
- create acount on cloudinary and install it
- also multer npm package
- create cloudinary.js 
-- creat middlewar using multer multer.middlieware.js






# main start here

# controller
create user file and send  res "ok" 
create route and import it in app.js


#logic build in controller.js
-import multer in router and applied before registeration
-- import api error in controller // validations
-- import User in contriller  // for  check if user already exists: username, email
    
--  chavatarLocalPath -check for images, check for avatar
-upload them to cloudinary also import uploadOnCloudinary







# Postman
go in body select form-data and send key and values
solved every error
now file upload on cloudinary
-- remove console.log from cloudinary.js
--unlinked file  fs.unlinkSync(localFilePath)

--console.log(req.files) // to check the files coming from frontend when we send the data from postmon and show in terminal


# Access Refresh Token, Middleware and cookies in Backend

-- gonna made login user in controll.js
// req body -> data
   // username or email
   //find the user
   // password check
   // access and refresh token
   // send this tookens in cookie


   -- create seprated meathod for generateAccessAndRefereshToken in user.controller for easy and we can call it together


   -- gonna made middleware by own for logout mean authintication for user hai ya nhi hai


-- inject this in routes and make it like loginUser and logoutUser

-- req.user in user.controller in logoutUser

-- see login and logout in poostman

made end point where user can refresh there token in controller
-- import in routes

# made models of subscription
