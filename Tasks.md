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
If a search term is entered only employees that contain that term in their name or their email address are shown.
Whenever the mouse hovers over an employee, the employee is marked.

<!-- 1. There is an input field.
    - it searches through employee names and emails -->
<!-- 2. Mark on mouse hover over employee. -->

**API:**

    All Employees:
        GET http://dummy.restapiexample.com/api/v1/employees

## Task 3

When an employee from the list gets selected (clicked), details to that employee are shown.
Create a page that shows a single employee. The user id, the name, the age and the salary of the user can be seen.
The salary can be changed.

3. On click, employee components show details.
4. New page is made to display employee component details.
5. Input box to change salary.

**API:**

    Get an Employee:
        GET http://dummy.restapiexample.com/api/v1/employee/{id}
    Change an Employee:
        PUT http://dummy.restapiexample.com/api/v1/update/{id}

## Task 4

Create a page that can create a new employee entry.
To create an employee, the fields name, age, salary and a picture (url string) may be supplied.
When a new employee is created, route back to the employees list and mark the newly created employee.

5. Create Employee form.
    - Input boxes for:
        - Name
        - Age
        - Salary
        - Picture
6. On create new employee, route back to employee list.
7. Mark newly created employee.

**API:**

    Create an Employee:
        POST http://dummy.restapiexample.com/api/v1/create

## Hints

* There are tools that can create a basic web application for you.
* Think about what happens if you select an employee that does not exist.
