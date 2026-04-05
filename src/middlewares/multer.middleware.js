import multer from 'multer'


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname)
  }
})

export const upload = multer({
     storage, 
})


/*
When user uploads an image from frontend, the file comes inside the HTTP request.
Your backend cannot directly send that raw request file to Cloudinary unless it first reads and handles it properly.
That is why we use multer.

--User selects image and clicks upload
--File comes to backend in request
--multer extracts the file from request and saves it temporarily
--cloudinary.js takes that saved file and uploads it to Cloudinary
--Cloudinary returns a URL
--You save that URL in database

*/