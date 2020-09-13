// Import express
const express = require('express');

// Create the router for the app
const router =  express.Router();

// Import the model burger.js to use its database functions.
const burger =  require('../models/burger.js');

// Create all routes and setup logic within where required.
router.get("/", (req, res) => {
    burger.selectAll(data => {
      const hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
