let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('categorySelect');
const amountInput = document.getElementById('amountInput');
const dateInput = document.getElementById('dateInput');
const addBtn = document.getElementById('addBtn');
const expenseTableBody = document.getElementById('expenseTableBody');
const totalAmountCell = document.getElementById('totalAmount');

addBtn.addEventListener('click',function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;
    if(category === ''){
        alert('Please select a category')
        return;
    }
    if(isNaN(amount)|| amount <= 0){
        alert('Please Enter AValid Amount');
        return;

    }
    if (date === ''){
  alert('Please select a date');
  return;
    }
    
    expenses.push({category, amount, date})
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(newRow);
    });


  const expense = expenses[expenses.length -1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
  
})
//============

for(const expense of expenses){
totalAmount += expense.amount;
totalAmountCell. textContent = totalAmount;

const newRow = expenseTableBody.insertRow();
const categoryCell = newRow.insertCell();
const amountCell = newRow.insertCell();
const dateCell = newRow.insertCell();
const deleteCell = newRow.insertCell();
const deleteBtn = document.createElement('button');

       deleteBtn.textContent = 'Delete';
       deleteBtn.classList.add('deleteBtn')
        deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(newRow);

   });
   
   categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}
