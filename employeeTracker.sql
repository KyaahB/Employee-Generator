DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    d_name VARCHAR(30) 
	
    
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary  DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
    

);

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id)

);


INSERT INTO department (d_name) values ('Sales');
INSERT INTO department (d_name) values ('Engineering');
INSERT INTO department (d_name) values ('Finance');
INSERT INTO department (d_name) values ('Legal');

INSERT INTO role (department_id, title, salary ) values (1 , 'Sales Lead', 100000);
INSERT INTO role (department_id, title, salary ) values ( 1 ,'Salesperson', 80000);
INSERT INTO role (department_id, title, salary ) values (2,'Lead Engineer', 150000);
INSERT INTO role (department_id, title, salary ) values (2 ,'Software Engineer', 120000);
INSERT INTO role (department_id, title, salary ) values (2 , 'Lead Engineer', 125000);
INSERT INTO role (department_id, title, salary ) values (3 , 'Accountant', 250000);
INSERT INTO role (department_id, title, salary ) values (4 ,'Legal Team Lead', 190000);
INSERT INTO role (department_id, title, salary ) values ( 4 ,'Lawyer', 190000);

INSERT INTO employees (first_name, last_name, role_id) values ('Onika', 'Maraj', 1);
INSERT INTO employees (first_name, last_name, role_id) values ('Jacob', 'Edwards', 2);
INSERT INTO employees (first_name, last_name, role_id) values ('Stefani', 'Germanotti', 3);
INSERT INTO employees (first_name, last_name, role_id) values ('Felicity', 'Hudson', 4);
INSERT INTO employees (first_name, last_name, role_id) values ('Justin', 'Williams', 5);
INSERT INTO employees (first_name, last_name, role_id) values ('Beyonce', 'Knowles', 6);
INSERT INTO employees (first_name, last_name, role_id) values ('Trevante', 'Rhodes',7);
INSERT INTO employees (first_name, last_name, role_id) values ('Lucien', 'Laviscount', 8);

-- ADD DEPARTMENT
INSERT INTO department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30))
    VALUES (d_name)





-- update employees
UPDATE [employees]
SET [role_id] = AUTO_INCREMENT
WHERE Name = 'updateEmployee';


-- add role
INSERT INTO role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary  DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
    VALUES (department_id, title, salary)
)




SELECT d_name.department_id, employees.role_id, title.role_id
FROM department
INNER JOIN employees ON department.title = employees.role_id


SELECT  department.d_name, employees.first_name, employees.last_name, employees.role_id, role.title
FROM department
INNER JOIN employees ON department.title = employees.role_id








-- SELECT first_name, last_name, role_id
-- FROM employees
-- INNER JOIN employees ON employees.employee_id = employee.id;




-- SELECT department,employee_id, title, salary
-- FROM role

SELECT * FROM role;
SELECT * FROM department;
SELECT * FROM employees;
