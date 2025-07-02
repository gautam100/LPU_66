const express = require("express");
const router = express.Router();

const { doLogin } = require("../controllers/AuthController"); 

router.post("/login", doLogin);

module.exports = router;
