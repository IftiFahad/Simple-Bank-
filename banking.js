console.log('banking js added');

// Deposit button click event listener
document.getElementById('deposit-btn').addEventListener('click', function () {
    console.log('Deposit button clicked');

    // Get the deposit input field and its value
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    console.log(depositAmount);

    // Get the current deposit total and update it
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    console.log(depositTotal);

    // Clear the deposit input field
    depositInput.value = '';

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    console.log(balanceTotal);



});

// handle withdraw button click
document.getElementById('withdraw-btn').addEventListener('click', function () {

    console.log('Withdraw button clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmount);

    // update withdraw toal
    const newWithdrawTotal = document.getElementById('withdraw-total');
    const newWithdrawTotalText = newWithdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(newWithdrawTotalText);
    newWithdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    console.log(newWithdrawTotal);

    // clear withdraw input field
    withdrawInput.value = '';

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    console.log(balanceTotal);



});
