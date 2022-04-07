const express = require("express");
const multer = require("multer");
const uploadRouter = express.Router();

const upload = multer({storage: storage, limits: {fileSize: 1000000}, imageFileFilter}).single("parksImage"); //multer middleware
    //Handling Routers to accepting posting Image.

    //Using DiskStorage Method(des:func, filename: func)
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "uploads");
        },
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    });

const imageFileFilter = function(req, file, cb){
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        return cb(new Error(`Please upload an image file`), false);
    }
    cb(null, true);
};

uploadRouter.route("/upload")
.all((req, res, next) => {

    res.sendStatus = 200;
    res.setHeader("content-Type", "image/plain");
    next();
})
.post("/image", (req, res) => {
    upload(req, res, (err) => {
        if(err) {
            res.status = 400;
            res.send(`Ensure you are submiting and image`);
        }
        else{
            res.send(req.file);
        }
    });
})

module.exports = uploadRouter;