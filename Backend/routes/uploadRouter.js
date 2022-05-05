const express = require("express");
const multer = require("multer");
const uploadRouter = express.Router();

const mustBeLoggedIn = (req, res, next) => {
    if(req.user){
        return next();
    }
    res.status(401)
} 

    //Using DiskStorage Method(des:func, filename: func)
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/images");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

    //Check to ensure the file is and image
const imageFileFilter = function(req, file, cb){
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        return cb(new Error(`Please upload an image file`), false);
    }
    cb(null, true);
};

const upload = multer({
    storage: storage, 
    limits: {fileSize: 1000000}, 
    imageFileFilter})
    .single("image"); //multer middleware - Name must be same as in the frontend/Parks
    //Handling Routers to accepting posting Image.

    //Router to handle upload
uploadRouter.route("/")
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "image/plain");
    next();
})
.get(upload, (req, res) => {
    res.status = 200;
    res.send(`This request is not supported!`);
})
.post(mustBeLoggedIn, upload, (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.file);
});

module.exports = uploadRouter;