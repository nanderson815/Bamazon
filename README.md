# Bamazon - A Node.js Storefront

 ## Bamazon is a Node and MySql application that allows Customers to buy products, Managers to manage the inventory, and Supervisors to track costs and sales.

###Start the App
To begin, seed the database with the `bamazonDatabase.sql` file using MySql Workbench or similar program. This will create your _products_ and _departments_ tables in the database. All other changes to the database will be made using one of the three Node applications.

Don't forget to `npm install` before using the application. 

####Bamazon Customer
The customer can buy products from bamazon by entering the ID (1-10) and the quantity of the product they would like to buy. Use `node bamazonCustomer.js` to runn the customer application. Follow the prompts to complete the transacton.

![bamazon customer example](/readmeImages/bamazonCustomer.png)

