const express = require("express");
const mongoose= require("mongoose");
const router = express.Router();
const { getAllUsers,postUsers ,getAllUsersById} = require("../controller/users");

router.get("/", getAllUsers);

router.get("/", postUsers);

router.get("/:id", getAllUsersById);

module.exports = router;
