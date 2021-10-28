const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//const userRoute = require("../routes/userRoute");


//register route
exports.register = (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({
        username: username,
        email: email,
        password: hashPassword(password),
      });
  
      newUser.save().then((result) => {
          res.status(201).json({
            message: "User created",
            result: result,
          });
        }).catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
  
      res.status(200).json({
        message: "User registered successfully",
        user: newUser,
      });
    }catch (error) {
      res.status(500).json({
        message: "Error registering user",
        error,
      });
    }
    };
