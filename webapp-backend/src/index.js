import express from "express";
const app = express();
import database from "./config/db.js";
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

app.use(cors());
app.use(express.json());
database();


app.use(userRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})