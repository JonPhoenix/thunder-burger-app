// Import ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

// Methods to call the orm functions using burger input for orm.
const burger = {
    selectAll: cb => {
        orm.all('burgers', res => {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: (cols, vals, cb) => {
        orm.create('burgers', cols, vals, res => {
            cb(res);
        });
    },
    updateOne: (objColVals, condition, cb) => {
        orm.update('burgers', objColVals, condition, res => {
            cb(res);
        });
    },
    deleteOne: (condition, cb) => {
        orm.delete('burgers', condition, res => {
            cb(res);
        });
    }
};

// Export the database functions for the controller - burger_controller.js
module.exports = burger;
