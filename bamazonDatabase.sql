
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id int identity(1,1) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL (10,4) NOT NULL,
    stock_quantity INT (10) NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("Samsung HDTV", "Electronics", 549.99, 22),
    ("Roomba Smart Vacuum", "Electronics", 229.99, 4),
    ("Computer Chair", "Furniture", 85.45, 10),
    ("Down Comforter", "Homegoods", 299.99, 18),
    ("Flatware Set", "Homegoods", 125.00, 35),
    ("Dog Bed", "Pets", 89.99, 100),
    ("Coffee Maker", "Homegoods", 115.99, 56),
    ("Dining Room Table", "Furniture", 899.99, 15),
    ("Shower Gel", "Toiletries", 8.99, 125),
    ("Google Home Max", "Electronics", 99.99, 199),
    ("Couch and Loveseat", "Furniture", 425.99, 7);



CREATE TABLE departments
(
    department_id INT IDENTITY(1,1) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    over_head_costs INT (10) NOT NULL,
    primary key(department_id)
)

INSERT INTO departments(department_name, over_head_costs)
VALUES
('Electronics', 5000),
('Furniture', 12000),
('Homegoods', 6000),
('Pets', 8000),
('Toiletries', 4000);

