// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

// Methods to call the orm functions using burger input for orm.
const burger = {
    selectAll: cb => {
        orm.all('burgers', res => {
            cb(res);
        });
    },
};
