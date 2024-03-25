/** @format */

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world");
});
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("app is running on port 4000....");
});
