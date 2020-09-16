DROP DATABASE IF EXISTS tburgers_db;
CREATE DATABASE tburgers_db;
USE tburgers_db;

-- Creating table burgers --
CREATE TABLE burgers (
    id INT(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);