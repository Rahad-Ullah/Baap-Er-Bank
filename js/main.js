// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get new deposite amount from the input
    const depositeField = document.getElementById('deposit-field');
    const newDeposit = parseFloat(depositeField.value);

    // clear the deposit field
    depositeField.value = '';

    // Input validation
    if(isNaN(newDeposit)){
        alert('Please input a deposite amount in NUMBER!')
    }

    // step-3: get previous deposit
    const deposite = document.getElementById('display-diposit');
    const previousDeposit = parseFloat(deposite.innerText);

    // step-4: add numbers to set the total deposit
    const totalDeposit = previousDeposit + newDeposit;
    // set deposit total
    deposite.innerText = totalDeposit;

    // step-5: get previous balance
    const balance = document.getElementById('display-balance');
    const previousBalance = parseFloat(balance.innerText);

    // step-6: calculate total balance
    const totalBalance = previousBalance + newDeposit;
    // set total balance
    balance.innerText = totalBalance;
    
    // clear the deposit field
    depositeField.value = '';
})