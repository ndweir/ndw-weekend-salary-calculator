

// * globally declared variable that holds the value of total monthly salary
let totalMonthlySalary = 0;

// * globally declared variable that holds the value of annual salary
let annualSalaryHolder = 0;

function formSubmit(event){
    // * take form inputs into variables
    event.preventDefault();


    // * puts form submit answers into variables
    let firstNameSubmit = document.getElementById('firstName').value;
    let lastNameSubmit = document.getElementById('lastName').value;
    let iDsubmit = document.getElementById('iDnum').value;
    let titleSubmit = document.getElementById('title').value;
    let annualSalarySubmit = document.getElementById('annualSalary').value;
    
    // console.log(firstNameSubmit);
    // console.log(lastNameSubmit);
    // console.log(iDsubmit);
    // console.log(titleSubmit);
    // console.log(annualSalarySubmit);
    
    // * created a variable for table body
    let tableBody = document.getElementById('tableBody');
   // console.log(tableBody);

    // * adds submit info variables to table rows with delete button
    tableBody.innerHTML += `<tr>
    <td>${firstNameSubmit}</td>
    <td>${lastNameSubmit}</td>
    <td>${iDsubmit}</td>
    <td>${titleSubmit}</td>
    <td>${annualSalarySubmit}</td>
    <td>
      <button id="deleter" onclick="deleteRowOnTable(event)">Delete</button>
    </td>
  </tr>
  `


   // annualSalaryHolder = Math.round(annualSalarySubmit / 12);

    // * adds and replaces totalMonthlySalary with Annual Salary divided by 12 and rounded
   totalMonthlySalary += Math.round(annualSalarySubmit / 12);
   // annualSalaryHolder = totalMonthlySalary
    //console.log("test    ", annualSalaryHolder)

    // * calls function to update rendering of Total Monthly Salary
   updateTotalMonthlySalary();
  // console.log(totalMonthlySalary)

  // * calls function which is intended to clear out form inputs after submit
  clearForm();
}


function clearForm(){
    // * clears form inputs after a new employee is submitted

   // console.log("This Working?"); 
    document.getElementById('myForm').reset();
}


function updateTotalMonthlySalary(){
    // * updates total monthly salary variable in DOM


    let totalMonthly = document.getElementById('totalMonthly');
    //console.log('total monthly container: ', totalMonthly)

    // * if total Monthly Salary is lower than 0, set it equal to zero
    if(totalMonthlySalary < 0){
        totalMonthlySalary = 0;
    }
    
    // updates DOM with total monthly salary when a new
    // employee is added or deleted

    // * selects footer element and puts it in a variable named footer
    let footer = document.querySelector("footer");
   // console.log('SPAN     ', span)

   // * applies 'over-budget class to footer when TMS > 20,000
    if(totalMonthlySalary > 20000){
       // console.log('totalMonthly    ', totalMonthlySalary)
        footer.classList.add('over-budget')
    } else {
        footer.classList.remove('over-budget')
    }


    //console.log(totalMonthlySalary)
    // * renders total monthly salary with $ and .00
    totalMonthly.textContent = `$${totalMonthlySalary}.00`;

}

function deleteRowOnTable(event){
    // * on Click, delete entire row
    //console.log('delete button used', event.target)

    // * when row is deleted make sure monthly salary is updated
    // * deleteMonthly variable accesses value of parent element, and sibling number
    let deleteMonthly = Math.round(event.target.parentElement.previousElementSibling.textContent / 12)
    //  console.log(event.target.parentElement.previousElementSibling.textContent)
    //  console.log(annualSalaryHolder)
   
    // * accesses delete button that is clicked
    let deleteBtn = event.target

    // * traverses up the DOM to access entire row from delete button event
    let deleteRow = deleteBtn.parentElement.parentElement

    // * alternative solve to traversing up the DOM
    // let deleteRow = event.target.closest('tr')

    // * deletes row of target button
    deleteRow.remove();

    // * minus replaces value of total monthly salary by subtracting deleteMonthly value
     totalMonthlySalary -= deleteMonthly;

     // * calls update Total Monthly to re-render the DOM
    updateTotalMonthlySalary()
}