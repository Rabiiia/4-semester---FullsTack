
class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate; 
  }

  toString() {
    return `Employee: ${this.name}, Salary: ${this.salary}, Hire Date: ${this.hireDate}.\n`;
  }
}

class Manager extends Employee {
  constructor(
    name,
    salary,
    hireDate,
    jobTitle,
    descriptionOfJob,
    employeesManaged,
  ) {
    super(name, salary, hireDate);
    this.jobTitle = jobTitle;
    this.descriptionOfJob = descriptionOfJob;
    this.employeesManaged = employeesManaged;
  }

  toString() {
    return `${super.toString()}Job Title: ${
      this.jobTitle
    }, Description of Job: ${this.descriptionOfJob}, Employees Managed: ${
      this.employeesManaged
    }.\n`;
  }
}

class Department extends Manager {
  constructor(
    name,
    salary,
    hireDate,
    jobTitle,
    descriptionOfJob,
    employeesManaged,
    departmentName,
    employees,
  ) {
    super(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged);
    this.departmentName = departmentName;
    this.employees = employees;
  }

  toString() {
    return `${super.toString()}Department Name: ${
      this.departmentName
    }, Employees: ${this.employees}`;
  }
}

const manager = new Manager(
  'Steve Taylor',
  50000,
  '01/01/2015',
  'Manager',
  'Manager of the Sales Department',
  2,
);

const department = new Department(
  'Steve Taylor',
  50000,
  '01/01/2015',
  'Manager',
  'Manager of the Sales Department',
  2,
  'Sales',
  'John Smith, Jane Doe',
);

console.log(department.toString());

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const persons = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
];

// 3) Loop through the numbers array and the employee object and print out the values using the propper for loop method. (for-in, for-of)

// for of loop
for (const number of numbers) {
  console.log(number);
}

for (const person of persons) {
  console.log(person);
}

// for in loop
console.log('=====================');
for (const properties in department) {
  console.log(`obj.${properties} = ${department[properties]}`);
}
const calculator = function (num1, num2) {
  return num1 + num2;
};

// 4a) Change the calculator function to an arrow function.

const calculatorArrow = (x, y) => {
  return x + y;
};

// 4b) Change the function to a one line function by use the implicit return.
const calculatorArrowOneLine = (x, y) => x + y;

// 4c) Create a default value for one of the parameters.

const calculatorArrowOneLineDefault = (x, y = 1) => x + y;


// 4d) Use the rest operator to change the function to accept any number of parameters.

const calculatorArrowOneLineDefaultRest = (...args) => args[0] + args[1];

// 5) Use destructuring to get the jobTitle and descriptionOfJob properties from the manager object.

const { jobTitle, descriptionOfJob } = manager;
console.log(manager);