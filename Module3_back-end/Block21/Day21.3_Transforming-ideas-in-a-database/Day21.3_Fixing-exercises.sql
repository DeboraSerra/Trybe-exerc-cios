# exercise 1, 2 and 3
CREATE DATABASE IF NOT EXISTS normalization;

CREATE TABLE normalization.staff (
	staff_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    start_date TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO normalization.staff (staff_id, first_name, last_name, email, phone, start_date)
VALUES (12, 'Joseph', 'Rodriguess', 'jo@gmail.com', '(35) 998552-1445', '2020-05-05 08:50:25'),
	(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47) 99522-4996', '2020-02-05 00:00:00'),
    (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33) 99855-4669', '2020-05-05 10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33) 99200-1556', '2020-05-05 11:45:40');
    
CREATE TABLE normalization.sector (
	sector_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
) ENGINE=InnoDB;

INSERT INTO normalization.sector (name)
VALUES ('Administração'), ('Vendas'), ('Operacional'), ('Estratégico'), ('Marketing');

CREATE TABLE normalization.sector_staff (
	staff_id INT,
	sector_id INT,
    FOREIGN KEY (sector_id) REFERENCES normalization.sector(sector_id),
    FOREIGN KEY (staff_id) REFERENCES normalization.staff(staff_id)
) ENGINE=InnoDB;

INSERT INTO normalization.sector_staff (staff_id, sector_id)
VALUES (12, 1), (12, 2), (13, 3), (14, 4), (14, 2), (15, 5);

SELECT staff.*, sector.*
FROM normalization.staff AS staff
INNER JOIN normalization.sector_staff AS inter
ON inter.staff_id = staff.staff_id
LEFT JOIN normalization.sector AS sector
ON inter.sector_id = sector.sector_id;
