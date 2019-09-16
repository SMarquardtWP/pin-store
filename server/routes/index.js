const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Received request : /");
  res.send("hello world");
});

module.exports = router;
