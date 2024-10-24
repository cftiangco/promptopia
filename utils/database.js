import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('mongodb is connected')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "shared_prompt",
            serverSelectionTimeoutMS: 5000,  // Time out after 5 seconds if unable to connect
            connectTimeoutMS: 10000   
        })

        isConnected = true

        console.log('mongodb connected')
    } catch (error) {
        console.log(error); //myhealthclinicph:PYbF6ACgWqZdKrz2
    }
}