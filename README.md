# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

/*
Project Description from the tests
* Your form's submit button **must** have a `data-testid="submitButton"` attribute. Like so:
  * ```html
    <button data-testid="submitButton">
      Submit
    </button>
    ```
* Your form's inputs must have these exact attributes:
    * `data-testid="firstNameInput"`
    * `data-testid="lastNameInput"`
    * `data-testid="idInput"`
    * `data-testid="titleInput"`
    * `data-testid="annualSalaryInput"`
* You must use a `<table>` element, where each employee is represented by a single `<tr>`.
* The *total monthly* cost must be rendered somewhere inside the `<footer>` element.
* The `over-budget` CSS class must be applied to the `<footer>` element when the total monthly salary exceeds $20,000.

* Add styling or extra functionality that fits with the theme of this assignment. (Feel free to be super creative!)

* When an employee is deleted, update the footer's monthly cost to reflect that employee's removal. _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. This is tricky! 


Big Picture:
It needs to be a salary calculator that takes in 5 statistics and displays them in a table below that includes a total monthly income statement. When you click submit the data must be added to the table, and when you click delete they must be removed from the table and the total monthly billing.

Attempted Sketch out:
--CSS styling for the calculator box and and tables needed, style.css but be included in the file and correctly exported.

A row of 5 forms that all are used by the submit button, each individual row is deleted from the table and total monthly.

NPM TEST
 Adds a single new employee's data to the table (39 ms)
    ✕ Adds multiple new employees' data to the table (5 ms)
    ✕ Clears out the form inputs after a new employee is submitted (6 ms)
    ✕ Updates the total monthly salary value when a single employee is added (6 ms)
    ✕ Updates the total monthly salary value when multiple employees are added (6 ms)
    ✕ Applies the 'over-budget' CSS class to the footer when the total monthly salary exceeds $20,000 (5 ms)
    ✕ Removes the correct employee table row when a delete button is clicked (6 ms)



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
