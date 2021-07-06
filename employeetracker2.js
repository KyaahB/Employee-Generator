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
            'Update Employee Role',
            'View All Roles'

        ]
      })
    

  .then((answer) => {
      switch (answer.toDo) {
          case 'View All Employees':
          viewEmployees();
          break;

          case 'View All Employees By Department':
          viewDepartment();
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
          updateEmployee();
          break;

          case 'View All Roles':
          viewRoles();
          break;

          default:
              console.log(`Invalid action: ${answer.action}`);
              break;
      }
  })};

//   get table from emploee table to appear in console (console.table)
  const viewEmployees = () => {
     connection.query(
         'SELECT * FROM employees',
         function(err, result){
             console.table(result);
             start();
         })
    };

   const viewDepartment = () => {
    connection.query(
        'SELECT * FROM department',
        function(err, result){
            console.table(result)
            
        })  
    };

   const addDepartment = () => {
    connection.query(
        'SELECT * FROM department',
        function(err, result){
            console.table(result)
            
        })  
    };

   const addRole = () => {
    connection.query(
        'SELECT * FROM department',
        function(err, result){
            console.table(result)


            const updateRole = () => {
                console.log('Updating all Rocky Road quantities...\n');
                const query = connection.query(
                  'UPDATE products SET ? WHERE ?',
                  // set correlates to the first object(quantity) and where correlates to (flavor)
                  [
                    {
                      quantity: 100,
                    },
                    {
                      flavor: 'Rocky Road',
                    },
                  ],
                  (err, res) => {
                    if (err) throw err;
                    console.log(`${res.affectedRows} products updated!\n`);
                    // Call deleteProduct AFTER the UPDATE completes
                    // deleteProduct();
                  }
                );
              
                // logs the actual query being run
                console.log(query.sql);
              };
            






        })  
    };
       
    
    const addEmployee = () => {
        connection.query(
            'SELECT * FROM role',
            function(err, result){
                console.table(result)
                
        })
    };

    const updateEmployee = () => {
        connection.query(
            'SELECT * FROM employees',
            function(err, result){
                console.table(result)
                
        })
    };

    const viewRoles = () => {
        connection.query(
            'SELECT * FROM role',
            function(err, result){
                console.table(result)
                
        })
    };
       
    

  

