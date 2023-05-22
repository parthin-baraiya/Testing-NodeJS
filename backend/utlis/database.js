import mongoose from "mongoose";

const connectDB= () =>{
    mongoose.connect(process.env.DATABASE_URL).then((res)=>{
        console.log(`MongoDB is Connect with Server ${res.connection.name}`);
    })
}

export default connectDB;