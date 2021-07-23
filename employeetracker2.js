const mysql = require('mysql');
const inquirer = require('inquirer');

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'Password1',
  database: 'employeeTracker_DB',
});

connection.connect((err) => {
  if (err) throw err;
  start();
});

const start = () => {
  inquirer
    .prompt({
      name: 'toDo',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'View All Employees By Department',
        'Add Department',
        'Add Employee',
        'Add Role',
        'Update Employee Role',
        'View All Roles',
        'View All Departments',
        'Im done'
      ]
    })


    .then((answer) => {
      switch (answer.toDo) {
        case 'View All Employees':
          viewEmployees();
          break;

        case 'View All Employees By Department':
          viewEmployeesByDepartment();
          break;

        case 'Add Department':
          addDepartment();
          break;

        case 'Add Role':
          addRole();
          break;

        case 'Add Employee':
          addEmployee();
          break;

        case 'Update Employee Role':
          updateEmployeeRole();
          break;

        case 'View All Roles':
          viewRoles();
          break;

        case 'View All Departments':
          viewDepartments();
          break;

        default:
          console.log(`Update done: ${answer.action}`);
          break;
      }
    })
};

//   get table from emploee table to appear in console (console.table)
const viewEmployees = () => {
  connection.query(
    'SELECT * FROM employees',
    function (err, result) {
      console.table(result);
      start();
    })
};

const viewEmployeesByDepartment = () => {
  connection.query(
    // selecting everything from department
    // 'SELECT * FROM department',
    // select all from the employees, along with their corresponding departments
    'SELECT employees.id, employees.first_name, employees.last_name, role.title, role.salary, department.d_name FROM employees, role, department  WHERE employees.role_id=role.id AND role.department_id=department.id ',
    function (err, result) {
      console.table(result)
      start();
    })
};

const addDepartment = () => {
  // ask the user first what do they want to name the new department
  inquirer.prompt([
    {
      type: "input",
      name: "d_name",
      message: "What is the name of the new department?"
    }
  ])
    .then((answer) => {
      connection.query(
        'INSERT INTO department SET ?',

        {
          d_name: answer.d_name,
        },

        (err, res) => {
          if (err) throw err;
         
          start();
         
        })
    })
};

const addRole = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the role?"
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of the role?"
    },
    {
      type: "input",
      name: "department_id",
      message: "What is the department_id of the role?"
    }
  ])
    .then((answer) => {
      connection.query(
        'INSERT INTO role SET ?',

        {
          title: answer.title,
          salary: answer.salary, 
          department_id: answer.department_id
        },

        (err, res) => {
          if (err) throw err;
          start();
          
        })
    })
};

const updateEmployeeRole = () => {

  const query = connection.query(
    "SELECT id, first_name FROM employees",

    (err, res) => {

      console.log(res)

      var employeeNames = res.map((data) => {
        return data.first_name;
      })

      console.log(employeeNames)

      inquirer.prompt([{
        type: 'list',
        name: 'selected_employee',
        message: "Which employee would you like to update?",
        choices: employeeNames
      }, 
      {
        type: 'input',
        name: 'updated_role_id',
        message: 'What is the new role id of this employee?'
      }])
      .then((answer) => {
        console.log('Updating role...\n');
          const query = connection.query(
            'UPDATE employees SET ? WHERE ?',
            [
              {
                role_id: answer.updated_role_id
              },
              {
                first_name: answer.selected_employee
              }
            ],
            (err, res) => {
              if (err) throw err;
              console.log(`${res.affectedRows} products updated!\n`);
              
            });
      })
})};




const addEmployee = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the first name of the new employee?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the new employee?"
    },
    {
      type: "input",
      name: "role_id",
      message: "What is the role id of the new employee?"
    }
  ])
    .then((answer) => {
      connection.query(
        'INSERT INTO employees SET ?',

        {
          first_name: answer.first_name,
          last_name: answer.last_name, 
          role_id: answer.role_id
        },

        (err, res) => {
          if (err) throw err;
          start();
          
        })
    })
};


const viewRoles = () => {
  connection.query(
    'SELECT * FROM role',
    function (err, result) {
      console.table(result)
      start();
    })
};

const viewDepartments = () => {
  connection.query(
    'SELECT * FROM department',
    function (err, result) {
      console.table(result)
      start();
    })
};





