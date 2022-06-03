# exercise 1
CREATE DATABASE IF NOT EXISTS zoo;

CREATE TABLE zoo.managers (
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE zoo.staff (
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES zoo.managers(id)
) ENGINE=InnoDB;

CREATE TABLE zoo.animals (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    specie VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    birth DATETIME,
    location VARCHAR(50),
    carer_id INT,
    FOREIGN KEY (carer_id) REFERENCES zoo.staff(id)
) ENGINE=InnoDB;
