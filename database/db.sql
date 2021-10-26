-- creating the database
CREATE DATABASE crudnodemysql;

--using the database

use crudnodemysql;

--creating a table 

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

--tp show all tables

SHOW TABLES;

--tp describe the table

describe customer;