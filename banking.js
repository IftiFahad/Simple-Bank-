// Function to get input field value by id
function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = ''; // Clear the input field
    return inputFieldValue;
}

// Function to get text element value by id
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText.replace('$', ''); // Remove dollar sign if present
    const value = parseFloat(elementValueString);
    return value;
}

// Function to set text element value by id
function setTextElementValueById(elementId, value) {
    document.getElementById(elementId).innerText = `$${value.toFixed(2)}`; // Set value with dollar sign and two decimal places
}

// Handle deposit button click
document.getElementById('deposit-btn').addEventListener('click', function () {
    console.log('Deposit button clicked');

    //Input depost amount
    const newDepositAmount = getInputFieldValueById('deposit-input');
    if (isNaN(newDepositAmount) || newDepositAmount <= 0) {
        console.log('Invalid deposit amount');
        return;
    }

    //Update the deposit 

    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    // Update Balance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
});


// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    console.log('Withdraw button clicked');

    // withdraw amount input 
    const newWithdrawAmount = getInputFieldValueById('withdraw-input');
    if (isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        console.log('Invalid withdraw amount');
        return;

    }

    // Update the withdraw amount

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // Update Balance

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
});





