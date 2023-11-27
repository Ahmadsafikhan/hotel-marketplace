// const express = require("express");
import express from "express";
import fs from "fs/promises";  // Import fs using ESM syntax

const app = express();

// route middleware
(async () => {
    const files = await fs.readdir("./routes");
    files.map(async (r) => {
        const module = await import(`./routes/${r}`);
        app.use("/api", module.default);
    });

    app.listen(8000, () => console.log("app running on port 8000"));
})();
