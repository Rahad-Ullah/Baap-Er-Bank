// step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: get the withdraw amount from input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdraw = parseFloat(withdrawField.value);

    // clear the deposit field
    withdrawField.value = '';

    // Input validation
    if(isNaN(newWithdraw)){
        alert('Please input a withdraw amount in NUMBER!')
        return;
    }

    // step-3: get previous withdraw amount
    const withdraw = document.getElementById('display-withdraw');
    const previousWithdraw = parseFloat(withdraw.innerText);

    // step-5: get previous balance
    const balance = document.getElementById('display-balance');
    const previousBalance = parseFloat(balance.innerText);
    
    // withdraw amount validation
    if(newWithdraw > previousBalance){
        alert('Baap Er Bank e eto taka nai');
        return;
    }

    // step-4: calculate total withdraw
    const totalWithdraw = previousWithdraw + newWithdraw;
    // set total withdraw
    withdraw.innerText = totalWithdraw;

    // step-6: calculate total balance
    const totalBalance = previousBalance - newWithdraw;
    // set total balance
    balance.innerText = totalBalance;
})