### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(300) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	nowDate TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);