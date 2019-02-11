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
            choices: ['Veiw Product Sales by Department', 'Create New Department']
        }
    ]).then(function (ans) {
        if (ans.choice === "View Product Sales by Depertment") {

        } else {
            createDepartment()
        }
    });
};

listOptions();

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