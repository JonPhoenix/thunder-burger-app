CREATE DATABASE tburgers_db;
USE tburgers_db;

CREATE TABLE burgers (
    id INT(15) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);