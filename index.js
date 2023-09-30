require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const server = express();
const db = require("./config/db");
const bodyParser = require("body-parser");
server.listen(port || 3800);


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
// routes files collection
const authRoutes = require("./routes/authentication/auth.routes");
const taskRouter = require("./routes/task.routes");

// middlware
server.use("/api/auth",authRoutes);
server.use("/api/task",taskRouter);
server.use(express.json());