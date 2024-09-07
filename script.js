


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
    // console.log(iDsubmit);
    // console.log(titleSubmit);
    // console.log(annualSalarySubmit);

    // document.getElementById('table').append(firstNameSubmit);
    // document.getElementById('table').append(lastNameSubmit);
    // document.getElementById('table').append(iDsubmit);
    // document.getElementById('table').append(titleSubmit);
    // document.getElementById('table').append(annualSalarySubmit);
    // adds row to table

    // take the form input variables and display in DOM on table


}


function clearForm(){
    // clears form inputs after a new employee is submitted

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