var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  // to create session
  req.session.ban = true;
  res.render("index");
});

router.get("/checkban", function (req, res) {
  if (req.session.ban === true) {
    res.send("You are banned");
  } else {
    res.send("You are not banned");
  }
});

router.get("/removeban", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("Ban removed");
  });
});

// To create
router.get("/create", async function (req, res) {
  const createdUser = await userModel.create({
    username: "monu_saini",
    name: "monu",
    age: 22,
  });
  res.send(createdUser);
});

// To find all users
router.get("/alluser", async function (req, res) {
  const allUsers = await userModel.find();
  res.send(allUsers);
});

// To find single user
router.get("/singleUser", async function (req, res) {
  const singleUser = await userModel.findOne({
    username: "monu_saini",
  });
  res.send(singleUser);
});

// To delete user
router.get("/delete", async function (req, res) {
  const deletedUser = await userModel.findOneAndDelete({
    username: "sonu_saini",
  });
  res.send(deletedUser);
});

// For cookies
// To create cookie
router.get("/cookie", function (req, res) {
  res.cookie("age", 25);
  res.send("cookie created");
});

// To read cookie
router.get("/readcookie", function (req, res) {
  res.send(req.cookies);
});

// To delete cookie
router.get("/deletecookie", function (req, res) {
  res.clearCookie("age");
  res.send("cleared cookie");
});

module.exports = router;
