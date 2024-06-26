import propertyModel from "../models/propertyModel.js";
import fs from 'fs'


//add food item

const addProperty = async (req,res) => {

    let image_filename = `${req.image_filename}`;

    const property = new propertyModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename
    })
try {
    await property.save();
    res.json({success:true,message:"Property Added"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
}
}

export {addProperty}