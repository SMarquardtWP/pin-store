const express = require("express");
const app = express();
const port = 8000;

// Enables the express server to handle CORs requests
const cors = require("cors");
app.use(cors());

// Enables the express server to access the request body
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const router = require("./routes/index");
app.use("/", router);

app.listen(port, () => console.log("listening on port", port));
