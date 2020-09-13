// Import express
const express = require('express');

// Create the router for the app
const router =  express.Router();

// Import the model burger.js to use its database functions.
const burger =  require('../models/burger.js');

// Create all routes and setup logic within where required.
router.get('/', (req, res) => {
    burger.selectAll(data => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, req.body.devoured
    ], result => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    burger.updateOne(
        {
          devoured: 1
        },
        condition,
        result => {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        }
    );
});