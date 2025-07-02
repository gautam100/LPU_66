const express = require("express");
const router = express.Router();

// importing categoryController.js
const { getCategoryList } = require("../controllers/categoryController"); 

router.get("/categoryList", getCategoryList);

module.exports = router;
