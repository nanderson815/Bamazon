var mysql = require('mysql');
var inquirer = require('inquirer');

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