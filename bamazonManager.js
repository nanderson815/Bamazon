var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('easy-table');

// Create connection to database.
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "admin",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
});




function listOptions() {
    inquirer.prompt([
        {
            name: 'options',
            type: 'list',
            message: 'Select a task.',
            choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
        }
    ]).then(function (ans) {
        switch (ans.options) {
            case "View Products for Sale":
                viewItems();
                break;

            case "View Low Inventory":

                break;

            case "Add to Inventory":

                break;

            case "Add New Product":

                break;
        };

    });
};

listOptions();

function viewItems() {
    connection.query("SELECT * FROM products", function (err, resp) {
        var data = resp;
        var t = new Table;
        data.forEach(function (product) {
            t.cell('Product Id', product.item_id)
            t.cell('Product Name', product.product_name)
            t.cell('Department', product.department_name) 
            t.cell('Quantity', product.stock_quantity)
            t.cell('Price, USD', product.price, Table.number(2))
            t.newRow()
        })
        console.log(t.toString())
        connection.end();
    });
};