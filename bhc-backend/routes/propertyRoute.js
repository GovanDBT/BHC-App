import express from "express"
import { addProperty } from "../controllers/propertyController.js"
import multer from "multer"

const propertyRouter = express.Router();

//image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb) =>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const uploads = multer({storage:storage})

propertyRouter.post("/add",uploads.single("image"),addProperty)







export default propertyRouter;