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
            name: 'choice',
            type: 'list',
            message: 'Select an Action',
            choices: ['View Product Sales by Department', 'Create New Department']
        }
    ]).then(function (ans) {
        if (ans.choice === "View Product Sales by Department") {
            viewSales();
        } else {
            createDepartment();
        }
    });
};

listOptions();


// Funciton to create department.
function createDepartment() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the department name:'
        },
        {
            name: 'overhead',
            type: 'input',
            message: 'Input the department monthly overhead:'
        }
    ]).then(function(answer){
        connection.query(`INSERT INTO departments (department_name, over_head_costs) VALUES ('${answer.name}', ${answer.overhead})`);
        connection.end();
    })

}

function viewSales(){
    connection.query(`SELECT * FROM departments`, function(err, resp){
        printTable(resp);
    })
}


// Prints a table for the data
function printTable(resp) {
    var data = resp;
    var t = new Table;
    data.forEach(function (product) {
        t.cell('Department ID', product.department_id)
        t.cell('Department Name', product.department_name)
        t.cell('Over Head Costs', product.over_head_costs)
        t.newRow()
    });
    console.log("\n" + t.toString());
    connection.end();
};