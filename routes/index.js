const userRouter = require("./users");
const showRouter = require("./shows")
const express = require('express');
const app = express();

app.set("json spaces", 2);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter)
app.use('/shows', showRouter)



module.exports = app;