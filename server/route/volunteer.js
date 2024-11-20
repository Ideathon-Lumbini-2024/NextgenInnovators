const express = require("express");
const router = express.Router();
const {getVolunteerController} = require("../controller/volunteer")
router.get("/",getVolunteerController)
module.exports = router;