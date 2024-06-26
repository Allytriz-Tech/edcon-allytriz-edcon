import mongoose from "mongoose";


const dbConnect = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOO_URI}/${DB_NAME}`);
        console.log("MongoDB connection host at" + connectionInstance.connection.host);
    } catch (error) {
        console.log("MongoDB connection failed" + error);
        process.exit(1);
    }
}

export default dbConnect;