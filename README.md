# Bamazon - A Node.js Storefront

 ## Bamazon is a Node and MySql application that allows Customers to buy products, Managers to manage the inventory, and Supervisors to track costs and sales.

### Start the App
To begin, seed the database with the `bamazonDatabase.sql` file using MySql Workbench or similar program. This will create your _products_ and _departments_ tables in the database. All other changes to the database will be made using one of the three Node applications.

Don't forget to `npm install` before using the application. 

### Bamazon Customer
The customer can buy products from bamazon by entering the ID (1-10) and the quantity of the product they would like to buy. Use `node bamazonCustomer.js` to run the customer application. Follow the prompts to complete the transaction.

![bamazon customer example](/readmeImages/bamazonCustomer.png)

### Bamazon Manager
The manager of the store can View Products for sale, View Low Inventory, Add to Inventory, and Add a New Product by following the prompts. Use `node bamazonManager.js` to launch the application. Follow the prompts to complete any of the tasks.

##### View Products
![bamazon manager example](/readmeImages/bamazonManager-view.png)

##### View Low Inventory
![bamazon manager example](/readmeImages/bamazonManager-viewLoq.png)

##### Add to Inventory
![bamazon manager example](/readmeImages/bamazonManager-add.png)

##### Add a New Product
![bamazon manager example](/readmeImages/bamazonManager-addP.png)

### Bamazon Supervisor
The supervisor can track the sales and expenses of each department as well as add new departments. Use `node bamazonSupervisor.js` to run the application. Sales numbers are taken from the `bamazonCustomer.js` application. 

##### View Sales by Department
![bamazon manager example](/readmeImages/bamazonSupervisor-View.png)

##### View Sales by Department
![bamazon manager example](/readmeImages/bamazonSupervisor-Add.png)