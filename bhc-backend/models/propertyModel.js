import mongoose from "mongoose";


const proertySchema = new mongoose.Schema({
    name: {type: String, required:true},
    description: {type:String,required:true},
    price: {type: Number,required:true},
    image: {type:String,required:true}
})

const propertyModel =mongoose.models.property || mongoose.model("property", proertySchema)

export default propertyModel;