// const express = require("express");
import express from "express"

const app = express();
app.get("/api/:message", (req, res) => {
  res.status(200).send(req.params.message);
});

app.listen(8000, ()=> console.log("app running on port 8000"))