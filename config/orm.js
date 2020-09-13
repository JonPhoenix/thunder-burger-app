// Import MySQL connection
const connection = require('../config/connection.js');

// Helper function for SQL syntax
const printQuestionMarks = num => {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push(`?`);
    }
    return arr.toString();
}

// Helper function to convert object key:value pairs to SQL syntax
const objToSql = ob => {

    let arr = [];
  
    // Loop through the keys and push the key:value as a string int arr
    for (let key in ob) {
      let value = ob[key];
      // Check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // If string with spaces, add quotations (Classic Burger => 'Classic Burger')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = `'${value}'`;
        }
        // e.g. {name: 'Classic Burger'} => ["name='Classic Burger'"]
        // e.g. {devoured: true} => ["devoured=true"]
        arr.push(`${key} = ${value}`);
      }
    }

    // Translate array of strings to a single comma-separated string
    return arr.toString();
}

// Object for all our SQL statement functions.

// Export the orm object for the model.
module.exports = orm;