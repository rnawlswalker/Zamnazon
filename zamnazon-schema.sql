CREATE database Zamn_ProductsDB;

USE Zamn_ProductsDB;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "flashlight", "home tools", 11, 35);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "coconut candle", "scents", 18, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "bluetooth speakers", "electronics", 78, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "wireless phone charger", "electronics", 125, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Roland SP-404", "music production", 450, 7);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "crystal necklace", "jewelry", 25, 45);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "fake gold ring: fly on a budget", "jewelry", 15, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "figdet spinner", "toys", 6, 135);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "rubix cube", "toys", 10, 325);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "MIDI Keyboard", "music production", 175, 25);

SELECT * FROM products;

