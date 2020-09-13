// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    selectAll: cb => {
        orm.all('burgers', res => {
            cb(res);
        });
    },
};
