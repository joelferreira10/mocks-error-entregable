import mongoose from "mongoose";
import 'dotenv/config'
const stringConnect=process.env.CONNECTION_LOCAL_MONGO;

try {
    mongoose.connect(stringConnect)
    console.log("conectado a la base de datos de mongo");
} catch (error) {
    console.log(error);
}