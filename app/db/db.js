import mongoose from "mongoose";


export const conn = mongoose.connect(process.env.MONGO_URL)

