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

connection.connect(function (err) {
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
        checkInventory(answ.ID, answ.quantity);
    })
};

buyProduct();



function checkInventory(id, quant) {
    connection.query("SELECT * FROM products WHERE ?",
        [{
            item_id: id
        }], function (err, resp) {
            if (resp[0].stock_quantity >= quant) {
                var cost = resp[0].price * quant;
                var remaining = resp[0].stock_quantity - quant;
                completePurchase(id, remaining, cost);
            } else {
                console.log("Insufficient quantity!");
                connection.end();
            }
        });
};



function completePurchase(id, quant, cost) {
    connection.query("UPDATE products SET ? WHERE ?", [
        {
            stock_quantity: quant
        },
        {
            item_id: id
        }
    ]);
    console.log("Thank you for your purchase! The total cost was $" + cost);
    connection.end();
};