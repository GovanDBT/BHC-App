import mongoose from "mongoose"

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://staremosh:xNVFK_SWhkmuUD9@bhc.o3bihkz.mongodb.net/BHC-APP').then(()=>console.log("DB connected"));
}