


function formSubmit(event){
    // take form inputs into variables
    event.preventDefault();

    let firstNameSubmit = document.getElementById('firstName').value;
    let lastNameSubmit = document.getElementById('lastName').value;
    let iDsubmit = document.getElementById('iDnum').value;
    let titleSubmit = document.getElementById('title').value;
    let annualSalarySubmit = document.getElementById('annualSalary').value;
    
    
    let tableBody = document.getElementById('tableBody');
    console.log(tableBody);

    tableBody.innerHTML += `<tr>
    <td>${firstNameSubmit}</td>
    <td>${lastNameSubmit}</td>
    <td>${iDsubmit}</td>
    <td>${titleSubmit}</td>
    <td>${annualSalarySubmit}</td>
    <td>
      <button id="deleter" onClick="deleteRowOnTable()">Delete</button>
    </td>
  </tr>
  `

    // console.log(firstNameSubmit);
    // console.log(lastNameSubmit);
    console.log(iDsubmit);
    console.log(titleSubmit);
    console.log(annualSalarySubmit);

   clearForm(event)
}


function clearForm(event){
    event.preventDefault();
    // clears form inputs after a new employee is submitted
    console.log("This Working?"); 
    document.getElementById('myForm').reset();
}


function updateTotalMonthlySalary(){
    // updates total monthly salary variable

    // updates DOM with total monthly salary when a new
    // employee is added or deleted
    

    //applies 'over-budget class to footer when TMS > 20,000
}

function deleteRowOnTable(){
    //on Click, delete entire row
    
    // when row is deleted make sure monthly salary is updated

}