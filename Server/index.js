import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/UserRoute.js";
import codeReviewRoute from "./routes/CodeRoute.js"

dotenv.config({});

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin: 'https://brocode-iloj.onrender.com',
    credentials: true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//APIs
app.use("/api/v1/user", userRoute);
app.use("/api/v1/bro", codeReviewRoute);

//APP is LISTENING
app.listen(PORT, ()=>
    {
        connectDB();
        console.log(`Server running at port ${PORT}`);
    })