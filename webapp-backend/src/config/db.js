import mongoose from "mongoose";
import path from 'path';

const database = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/blinkit')
    .then(()=>{
        console.log('connected to database');
    })
    .catch((error)=>{
        console.log('error connecting to database',error);
    });
}

export default database;