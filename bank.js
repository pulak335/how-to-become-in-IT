function getInputValue(depositId) {
    const depositInput = document.getElementById(depositId);
    const depositAmmount = depositInput.value;
    const depositData = parseFloat(depositAmmount);
    depositInput.value = "";
    return depositData;   
}


document.getElementById('btn-deposit').addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-ammount');
    const depositAmmount = depositInput.value;
    const depositTotal = document.getElementById('total-deposit');  */

    const depositAmmount = getInputValue('deposit-ammount');
    if (depositAmmount > 0) {
        const depositTotal = document.getElementById('total-deposit');
        const preDeposit = depositTotal.innerText;
        const newDepositAmmount = parseFloat(preDeposit) + depositAmmount;
        depositTotal.innerText = newDepositAmmount;
    }
    else {
        alert('this ammount not valid for back');

    }

    //update balance
    const balance = document.getElementById('total-balance');
    const totalBalance = balance.innerText;
    const preTotalBalance = parseFloat(totalBalance);
    const newTotalBalance = preTotalBalance + parseFloat(depositAmmount);
    balance.innerText = newTotalBalance;

})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-ammount');
    const withdrawAmmount = withdrawInput.value;
    const withdrawAmmountTotal = parseFloat(withdrawAmmount); */

    const withdrawAmmountTotal = getInputValue('withdraw-ammount')

    if (withdrawAmmountTotal > 0) {
        const withdraw = document.getElementById('total-withdraw');
        const totalWithdraw = withdraw.innerText;
        const newWithdrawAmmount = withdrawAmmountTotal + parseFloat(totalWithdraw);
        withdraw.innerText = newWithdrawAmmount; 
    }
    else {
        alert('this ammount not avaible');
    }

    // const withdraw = document.getElementById('total-withdraw');
    // const totalWithdraw = withdraw.innerText;
    // const newWithdrawAmmount = withdrawAmmountTotal + parseFloat(totalWithdraw);
    // withdraw.innerText = newWithdrawAmmount;

    // update new balace

        const balance = document.getElementById('total-balance');
        const totalBalance = balance.innerText;
        const newBalance = parseFloat(totalBalance);
        const finalBalance =newBalance - withdrawAmmountTotal;
        balance.innerText = finalBalance;




});


