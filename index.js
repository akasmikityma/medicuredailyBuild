import express from 'express';
import router from './Routes/Allroutes.js';
import { connect } from './DatabaseRoom/Connection.js';
import cors from 'cors';
const url="mongodb://127.0.0.1:27017";
const app=express();
app.use(express.json());
app.use(cors());
connect(url);
app.use('/',router);

app.listen(3000,()=>{
    console.log("the server is running at 3000");
})