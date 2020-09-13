// Import the ORM to create functions that will interact with the database.
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
};
