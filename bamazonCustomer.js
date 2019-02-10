var mysql = require('mysql');
var inquirer = require('inquirer');

// Create connection to database.
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "admin",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err) throw err;
});






function buyProduct() {
    inquirer.prompt([
        {
            name: "ID",
            message: "Enter the ID of the product you would like to buy:",
            type: 'input'
        },
        {
            name: "quantity",
            message: 'How many would you like to purchase?',
            type: "input"
        }
    ]).then(function (answ) {
        console.log(answ);
    })
};

buyProduct();