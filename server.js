const {db} = require("./db/connection")
const express = require("express");
const seed = require("./seed");
const app = require("./routes/index");
const port = 3000;


app.listen(port, async () => {
    await db.sync();
    console.log(`Listening at http://localhost:${port}`)
})
