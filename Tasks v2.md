# Tasks

During these tasks you will create a web application using this API: <http://dummy.restapiexample.com/.>

**Important**: Please do not use jQuery for these tasks.

## Task 1

Create a web application using Vue.js, Angular or React.
The web application should have the following elements:

* Header:
    Shows the title of the current page.
* Drawer:
    Allows to navigate through the web application.
* Main Page:
    The content goes here.

## Task 2

Create a page that lists all employees. For each employee name, age and salary are shown.
The employees can be sorted by name or salary. There is an input field to enter a search term.
If a search term is entered only employees that contain that term in their name or their age are shown.
Whenever the mouse hovers over an employee, the employee is marked.

**API:**

    All Employees:
        GET http://dummy.restapiexample.com/api/v1/employees

## Task 3

When an employee from the list gets selected (clicked), details to that employee are shown.
Create a page that shows a single employee. The user id, the name, the age and the salary of the user can be seen.
The salary can be changed.

**API:**

    Get an Employee:
        GET http://dummy.restapiexample.com/api/v1/employee/{id}
    Change an Employee:
        PUT http://dummy.restapiexample.com/api/v1/update/{id}

## Task 4

Create a page that can create a new employee entry.
To create an employee, the fields name, age, salary and a picture (url string) may be supplied.
When a new employee is created, route back to the employees list and mark the newly created employee.

**API:**

    Create an Employee:
        POST http://dummy.restapiexample.com/api/v1/create

## Hints

* There are tools that can create a basic web application for you.
* Think about what happens if you select an employee that does not exist.
