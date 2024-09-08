
let totalMonthlySalary = 0;
let annualSalaryHolder = 0;

function formSubmit(event){
    // take form inputs into variables
    event.preventDefault();

    let firstNameSubmit = document.getElementById('firstName').value;
    let lastNameSubmit = document.getElementById('lastName').value;
    let iDsubmit = document.getElementById('iDnum').value;
    let titleSubmit = document.getElementById('title').value;
    let annualSalarySubmit = document.getElementById('annualSalary').value;
   // annualSalaryHolder = annualSalarySubmit / 12;
    
    let tableBody = document.getElementById('tableBody');
   // console.log(tableBody);

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

    // console.log(firstNameSubmit);
    // console.log(lastNameSubmit);
    // console.log(iDsubmit);
    // console.log(titleSubmit);
    // console.log(annualSalarySubmit);

   

   totalMonthlySalary += Math.round(annualSalarySubmit / 12);
   // annualSalaryHolder = totalMonthlySalary
    //console.log("test    ", annualSalaryHolder)
   updateTotalMonthlySalary();
  // console.log(totalMonthlySalary)
  clearForm(event);
}


function clearForm(event){
    event.preventDefault();
    // clears form inputs after a new employee is submitted
   // console.log("This Working?"); 
    document.getElementById('myForm').reset();
}


function updateTotalMonthlySalary(){
    // updates total monthly salary variable
    let totalMonthly = document.getElementById('totalMonthly');
    //console.log('total monthly container: ', totalMonthly)
    if(totalMonthlySalary < 0){
        totalMonthlySalary = 0;
    }
    
    // updates DOM with total monthly salary when a new
    // employee is added or deleted

    let footer = document.querySelector("span");
   // console.log(footer)

    if(totalMonthlySalary > 20000){
      //  console.log(totalMonthlySalary)
        footer.classList.add('over-budget')
    } else {
        footer.classList.remove('over-budget')
    }



    totalMonthly.textContent = `$${totalMonthlySalary}.00`;


   

    
    
    

    //applies 'over-budget class to footer when TMS > 20,000
}

function deleteRowOnTable(event){
    //on Click, delete entire row
    //console.log('delete button used', event.target)
    // when row is deleted make sure monthly salary is updated\
   // console.log(event.target)

   
    let deleteBtn = event.target
    let deleteRow = deleteBtn.parentElement.parentElement

    deleteRow.remove();

     totalMonthlySalary -= annualSalaryHolder;
    updateTotalMonthlySalary()
}