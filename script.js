


function formSubmit(event){
    // take form inputs into variables
    event.preventDefault();


    let firstNameSubmit = document.getElementById('firstName').value;
    let lastNameSubmit = document.getElementById('lastName').value;
    let iDsubmit = document.getElementById('iDnum').value;
    let titleSubmit = document.getElementById('title').value;
    let annualSalarySubmit = document.getElementById('annualSalary').value;

    // console.log(firstNameSubmit);
    // console.log(lastNameSubmit);
    console.log(iDsubmit);
    console.log(titleSubmit);
    console.log(annualSalarySubmit);

    // document.getElementById('table').append(firstNameSubmit);
    // document.getElementById('table').append(lastNameSubmit);
    // document.getElementById('table').append(iDsubmit);
    // document.getElementById('table').append(titleSubmit);
    // document.getElementById('table').append(annualSalarySubmit);
    // adds row to table

    let table = document.getElementById('tableBody')
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    // take the form input variables and display in DOM on table
    cell1.innerHTML += firstNameSubmit;
    cell2.innerHTML += lastNameSubmit;
    cell3.innerHTML += iDsubmit;
    cell4.innerHTML += titleSubmit;
    cell5.innerHTML += annualSalarySubmit;
   // cell6.innerHTML += btnChild.appendChild("Delete")
   clearForm(event)
}


function clearForm(event){
    event.preventDefault();
    // clears form inputs after a new employee is submitted
    console.log("This Working?"); 

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