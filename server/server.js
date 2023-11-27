// import express from "express";
import express from "express";
import fs from "fs/promises";
import dotenv from 'dotenv';
import cors from "cors";
import morgan from 'morgan'; // Import Morgan
// import mongoose from "mongoose";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors());

// Use Morgan middleware for logging
app.use(morgan('dev'));

// Mongoose connection
connectDB(); //connect to mongodb

// route middleware
(async () => {
    const files = await fs.readdir("./routes");
    files.map(async (r) => {
        const module = await import(`./routes/${r}`);
        app.use("/api", module.default);
    });

    const port = process.env.PORT;
    app.listen(port, () => console.log(`App running on port ${port}`));
})();
