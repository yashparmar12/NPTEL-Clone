import express from "express";
import cors from "cors";
import DB from "./DB.js";
import dotenv from "dotenv";
import router from "./routes/homeRoute.js";

const app = express();
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(cors({origin: "http://localhost:5173",credentials: true}));

app.get('/', (req, res) => {
    res.send("HIII");
})

app.use("/NPTEL",router)

app.listen(8000, () => {
    DB();
    console.log(`Server running at ${process.env.PORT}`)
})