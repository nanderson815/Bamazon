
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id int identity(1,1) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT (10) NOT NULL,
    stock_quantity INT (10) NOT NULL,
    PRIMARY KEY(item_id)
);


